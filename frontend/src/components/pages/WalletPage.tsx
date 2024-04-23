import { useState } from "react";
import Header from "../organisms/header/Header";
import AssistantWallet from "../organisms/section/AssistantWallet";
import ClientModal from "../organisms/modal/ClientModal";
import AssistantModal from "../organisms/modal/AssistantModal";

export default function WalletPage() {
    const [showClientModal, setShowClientModal] = useState(false);
    const [showAssistantModal, setShowAssistantModal] = useState(false);


    return (
        <main>
            <Header />
            <AssistantWallet setShowClientModal={setShowClientModal} setShowAssistantModal={setShowAssistantModal} />
            {showClientModal &&
                <ClientModal setShowClientModal={setShowClientModal} />}
            {showAssistantModal &&
                <AssistantModal setShowAssistantModal={setShowAssistantModal} />}
        </main>

    )
}