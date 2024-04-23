import React, { useState } from "react";
import { removeAssistantsFromClients } from '../../../api/axios';
import { ClientAssistant, ClientWithId } from '../../../interfaces/interfaces';

interface Props {
    setShowClientModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleClientSelection: (clientId: string) => void;
    setNewClientsList: React.Dispatch<React.SetStateAction<ClientWithId[]>>;
    selectedClients: ClientAssistant[];
    assistantName: string;
    setAssistantName: React.Dispatch<React.SetStateAction<string>>;
    myClientsList: ClientWithId[];
    setMyClientsList: React.Dispatch<React.SetStateAction<ClientWithId[]>>;
    selectedAssistantId: string;
    setSelectedAssistantId: React.Dispatch<React.SetStateAction<string>>;

}

export default function ClientList({
    handleClientSelection,
    selectedClients,
    assistantName,
    myClientsList,
}: Props) {



    const [searchTermClient, setSearchTermClient] = useState<string>('');

    const handleUnlink = async () => {
        try {
            await removeAssistantsFromClients(selectedClients);
            console.log('Clientes desvinculados de seus assistentes com sucesso!');
            window.location.reload();
        } catch (error) {
            console.error('Erro ao remover assistentes dos clientes:', error);
        }
    };


    const handleOnChangeSearchClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTermClient(event.target.value);
    };


    const handleOnChange = (target: EventTarget & HTMLInputElement) => {
        const isChecked = target.checked;
        const parentElement = target.closest('.checkbox-wrapper-2');
        if (parentElement) {
            parentElement.className = (isChecked ? 'checked checkbox-wrapper-2' : 'checkbox-wrapper-2');
        }
    };

    return (
        <div className="modal">
            <div className="div-22">
                <div className="div-26">
                    <div className="div-23">
                        <h2>Carteira do {assistantName}</h2>
                        <span className="span-23">{myClientsList && myClientsList.length}</span>
                    </div>

                    <div>
                        <button className="desv" onClick={handleUnlink}>Desvincular <img src="/Desv.svg" alt="Icone de seta" /></button>
                    </div>
                </div>
                <div className="div-25">
                    <input type="text" placeholder="Buscar" value={searchTermClient} onChange={handleOnChangeSearchClient} />

                </div>
                <div className="checkbox-wrapper">
                    <label id="check">
                        <div>
                            <input type="checkbox" id="check" />
                            <span className="text-left">Código</span>
                            <span className="text-top">Parceiro</span>
                        </div>
                        <span className="text-right">Rede</span>
                    </label>
                </div>
                <div className="div-27">
                    {myClientsList && myClientsList
                        .filter((item) => {
                            return (
                                item.code.toLowerCase().includes(searchTermClient.toLowerCase()) ||
                                item.name.toLowerCase().includes(searchTermClient.toLowerCase()) ||
                                item.network.toLowerCase().includes(searchTermClient.toLowerCase())
                            );
                        })
                        .map((item, index) => (
                            <div key={index} className={`checkbox-wrapper-2`}>
                                <label htmlFor={`check-s-${index}`}>
                                    <div>
                                        <input type="checkbox" className={`check-2`} id={`check-s-${index}`}
                                            onChange={(event) => {
                                                handleOnChange(event.target);
                                                if (item._id) {
                                                    handleClientSelection(item._id);
                                                }
                                            }} />
                                        <span className="text-left-2">{item.code}</span>
                                        <span className="text-top-2">{item.name}</span>
                                    </div>
                                    <span className="text-right-2">{item.network}</span>
                                </label>
                            </div>
                        ))}
                </div>
            </div>

        </div>
    )
}