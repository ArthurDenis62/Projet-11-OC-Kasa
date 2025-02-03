import E from './Error.module.scss';

const Error = () => {
    return (
        <>
            <div className={E.error}>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner à la page d'accueil</a>
            </div>
        </>
    )
}

export default Error;