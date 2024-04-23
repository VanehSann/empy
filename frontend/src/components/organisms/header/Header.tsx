import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="top">
                <div className="logo">
                    <Link to="#"><img src="/logo.svg" alt="Logo" width={32} height={32} /></Link>
                </div>
                <nav className="menu">
                    <ul>
                        <li><Link to="#"><img src="/ChartPie.svg" alt="Ícone 1" width={36} height={36} /></Link></li>
                        <li><Link to="#"><img src="/Wallet.svg" alt="Ícone 2" width={36} height={36} /></Link></li>
                        <li><Link to="#"><img src="/Toolbox.svg" alt="Ícone 3" width={36} height={36} /></Link></li>
                        <li><Link to="#"><img src="/Storefront.svg" alt="Ícone 4" width={36} height={36} /></Link></li>
                        <li><Link to="#"><img src="/ClipboardText.svg" alt="Ícone 5" width={36} height={36} /></Link></li>
                        <li><Link to="#"><img src="/Money.svg" alt="Ícone 6" width={36} height={36} /></Link></li>
                    </ul>
                </nav>
            </div>
            <nav className="bottom">
                <ul>
                    <li><Link to="#"><img src="/UserCircle.svg" alt="user circle" width={36} height={36} /></Link></li>
                    <li><Link to="#"><img src="/Sun.svg" alt="Sun" width={36} height={36} /></Link></li>
                    <li><Link to="#"><img src="/Admin.svg" alt="admin" width={36} height={36} /></Link></li>
                </ul>
            </nav>
        </header>
    )
}