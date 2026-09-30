function Footer({nome, ano}) {
    const anoAtual = new Date().getFullYear();

    
    return (
        <footer>
            <p>&copy; {anoAtual} - {nome} </p>
        </footer>
    );
}

export default Footer;