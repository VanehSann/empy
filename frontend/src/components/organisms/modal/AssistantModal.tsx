import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createAssistant } from '../../../api/axios';
import { Assistant } from '../../../interfaces/interfaces';

const assistent = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string()
})

interface Props {
    setShowAssistantModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ClientModal({ setShowAssistantModal }: Props) {

    const { register, handleSubmit } = useForm<assistent>({
        resolver: zodResolver(assistent),
    });

    type assistent = z.infer<typeof assistent>

    async function handleForm(data: assistent) {

        createAssistant(data).then((data: Assistant[]) => {
            setShowAssistantModal(false)
            window.location.reload();
        }).catch((error: any) => {
            console.error('Erro ao buscar assistentes:', error);
        });
    }

    return (
        <section className="section-modal">
            <div className="modal-add">
                <h2>Cadastro de Assistente Comercial</h2>
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className="form">
                        <div className="div-30">
                            <label htmlFor="clientcode">Nome Completo</label>
                            <input type="text" id="clientcode" className="add-input" {...register('name')} placeholder="Digite a quantidade" />
                        </div>
                        <div className="div-30">
                            <label htmlFor="clientname">Email</label>
                            <input type="text" className="add-input" id="clientname" {...register('email')} placeholder="Digite a quantidade" />
                        </div>
                        <div className="div-30">
                            <label htmlFor="clientrede">Telefone</label>
                            <input type="text" className="add-input" id="rede" {...register('phone')} placeholder="Digite a quantidade" />
                        </div>
                    </div>
                    <div className="btns">
                        <button onClick={() => setShowAssistantModal(false)} className="canc-button">Cancelar</button>
                        <button type="submit" className="add-button">Salvar</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
