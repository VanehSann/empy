import { ClientAssistant, ClientWithId } from '../../../interfaces/interfaces';
import React from 'react';
import { updateClientsWithAssistants } from '../../../api/axios';

interface Props {
    newClientsList: ClientWithId[];
    searchTermNewClient: string;
    handleOnChangeSearchNewClient: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClientSelection: (clientId: string) => void;
    setShowClientModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedClients: ClientAssistant[];
}

export default function NewClientList({ setShowClientModal, newClientsList, searchTermNewClient, handleOnChangeSearchNewClient, handleClientSelection, selectedClients }: Props) {

    const handleLink = async () => {
        try {
            await updateClientsWithAssistants(selectedClients);
            console.log('Clientes vinculados com sucesso!');
            window.location.reload();
        } catch (error) {
            console.error('Erro ao vincular clientes:', error);
        }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        const parentElement = event.target.closest('.checkbox-wrapper-2');
        if (parentElement) {
            parentElement.className = (isChecked ? 'checked checkbox-wrapper-2' : 'checkbox-wrapper-2');
        }
    };

    return (
        <div className="modal">
            <div className="div-22">
                <div className="div-26">
                    <div className="div-23">
                        <h2>Clientes (Não Vinculados)</h2>
                        <span className="span-23">{newClientsList && newClientsList.length}</span>
                    </div>
                    <div className="div-24">
                        <button
                            onClick={() => setShowClientModal(true)}
                            className="add">
                            <img src='Add.svg' alt="Icone de adicionar" />
                            Adicionar cliente
                        </button>
                        <button
                            className="vin"
                            onClick={handleLink}>Vincular
                            <img className='rotate-img' src="Vinc.svg" alt="Icone de seta" />
                        </button>
                    </div>
                </div>
                <div className="div-25">
                    <input type="text" placeholder="Buscar" value={searchTermNewClient} onChange={handleOnChangeSearchNewClient} />
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
                    {newClientsList && newClientsList
                        .filter((item) => {
                            return (
                                item.code.toLowerCase().includes(searchTermNewClient.toLowerCase()) ||
                                item.name.toLowerCase().includes(searchTermNewClient.toLowerCase()) ||
                                item.network.toLowerCase().includes(searchTermNewClient.toLowerCase())
                            );
                        })
                        .map((item, index) => (
                            <div key={index} className="checkbox-wrapper-2">
                                <label>
                                    <div>
                                        <input type="checkbox" className="check-2" id={`check-2s-${index}`}
                                            onChange={(event) => {
                                                handleOnChange(event);
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