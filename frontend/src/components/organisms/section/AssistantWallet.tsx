import { useEffect, useState } from "react";
import { fetchAssistants, fetchMyClients, fetchNewClients } from '../../../api/axios';
import { AssistantWithId, ClientAssistant, ClientWithId } from '../../../interfaces/interfaces';
import NewClientList from "../list/NewClientList";
import ClientList from "../list/ClientList";

interface Props {
    setShowClientModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowAssistantModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AssistantWallet({ setShowClientModal, setShowAssistantModal }: Props) {
    const [assistants, setAssistants] = useState<AssistantWithId[]>([]);
    const [assistantName, setAssistantName] = useState<string>('');
    const [selectedAssistantId, setSelectedAssistantId] = useState<string>('');
    const [myClientsList, setMyClientsList] = useState<ClientWithId[]>([]);
    const [newClientsList, setNewClientsList] = useState<ClientWithId[]>([]);
    const [searchTermNewClient, setSearchTermNewClient] = useState<string>('');
    const [selectedClients, setSelectedClients] = useState<ClientAssistant[]>([]);


    const handleClientSelection = (clientId: string) => {
        const isSelected = selectedClients.some(client => client.clientId === clientId);
        if (!isSelected) {
            setSelectedClients([...selectedClients, { clientId, assistantId: selectedAssistantId }]);
        } else {
            const updatedSelectedClients = selectedClients.filter(client => client.clientId !== clientId);
            setSelectedClients(updatedSelectedClients);
        }
    };

    const handleOnChangeSearchNewClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTermNewClient(event.target.value);
    };

    useEffect(() => {
        fetchAssistants().then((data: AssistantWithId[]) => {
            setAssistants(data);

            fetchMyClients(data[0]._id).then((data: ClientWithId[]) => {
                setMyClientsList(data);
            }).catch((error: any) => {
                console.error('Erro ao buscar clientes:', error);
            });
            setSelectedAssistantId(data[0]._id);
            setAssistantName(data[0].name);
        }).catch((error: any) => {
            console.error('Erro ao buscar assistentes:', error);
        });
    }, []);

    useEffect(() => {
        if (selectedAssistantId) {
            fetchMyClients(selectedAssistantId).then((data: ClientWithId[]) => {
                setMyClientsList(data);
            }).catch((error: any) => {
                console.error('Erro ao buscar clientes:', error);
            });
        }
    }, [selectedAssistantId]);

    useEffect(() => {
        fetchNewClients().then((data: ClientWithId[]) => {
            setNewClientsList(data);
        });
    }, [setShowClientModal]);

    async function handleSelectChange(event: any) {
        const selectedAssistantId = event.target.value;
        await fetchMyClients(selectedAssistantId)
            .then(res => {
                setMyClientsList(res.data)
            })
            .catch(error => console.log(error))
        setSelectedAssistantId(selectedAssistantId);
        const selectedAssistant = assistants.find((assistant) => assistant._id === selectedAssistantId);
        if (selectedAssistant) {
            setAssistantName(selectedAssistant.name);
        }
    }

    return (
        <section>
            <h1>Carteira de Clientes</h1>
            <div>
                <span>Selecione o Assistente Comercial</span>
                <div className="mol-1">
                    <select onChange={handleSelectChange}>
                        {assistants && assistants.map(({ _id, name }: AssistantWithId, index: number) => (
                            <option key={`option-${index}`} value={_id}>{name}</option>
                        ))} </select>

                    <button onClick={() => setShowAssistantModal(true)}>
                        <img src="/PlusCircle.svg" alt="" width={22} height={22} />
                    </button>

                </div>
            </div>
            <div className="premodal">
                <NewClientList
                    setShowClientModal={setShowClientModal}
                    newClientsList={newClientsList}
                    searchTermNewClient={searchTermNewClient}
                    handleOnChangeSearchNewClient={handleOnChangeSearchNewClient}
                    handleClientSelection={handleClientSelection}
                    selectedClients={selectedClients}
                />
                <ClientList
                    setShowClientModal={setShowClientModal}
                    handleClientSelection={handleClientSelection}
                    setNewClientsList={setNewClientsList}
                    selectedClients={selectedClients}
                    assistantName={assistantName}
                    setAssistantName={setAssistantName}
                    myClientsList={myClientsList}
                    setMyClientsList={setMyClientsList}
                    selectedAssistantId={selectedAssistantId}
                    setSelectedAssistantId={setSelectedAssistantId}
                />
            </div>
        </section>
    )
}