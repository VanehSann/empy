import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createClient } from '../../../api/axios';
import { Client } from '../../../interfaces/interfaces';

const client = z.object({
    code: z.string(),
    name: z.string(),
    network: z.string()
})

interface Props {
    setShowClientModal: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function ClientModal({ setShowClientModal }: Props) {

    const { register, handleSubmit } = useForm<client>({
        resolver: zodResolver(client),
    });



    type client = z.infer<typeof client>

    async function handleForm(data: client) {
        createClient(data).then((data: Client[]) => {
            console.log(data);
            setShowClientModal(false)
            window.location.reload();
        }).catch((error: any) => {
            console.error('Erro ao buscar clientes:', error);
        });
    }

    return (
        <section className="section-modal">
            <div className="modal-add">
                <h2>Cadastro de Cliente</h2>

                <form onSubmit={handleSubmit(handleForm)}>
                    <div className="form">
                        <div className="div-30">
                            <label htmlFor="clientcode">Código do Cliente</label>
                            <input type="text" id="clientcode" className="add-input" {...register('code')} placeholder="Digite a quantidade" />
                        </div>
                        <div className="div-30">
                            <label htmlFor="clientname">Nome do cliente</label>
                            <input type="text" className="add-input" id="clientname" {...register('name')} placeholder="Digite a quantidade" />
                        </div>
                        <div className="div-30">
                            <label htmlFor="clientrede">Rede</label>
                            <input type="text" className="add-input" id="rede" {...register('network')} placeholder="Digite a quantidade" />
                        </div>

                    </div>
                    <div className="btns">
                        <button onClick={() => setShowClientModal(false)} className="canc-button">Cancelar</button>
                        <button className="add-button" type="submit">Salvar</button>

                    </div>
                </form>

            </div>
        </section>
    );
};
