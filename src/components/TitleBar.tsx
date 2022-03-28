interface Props {
    text: string
}


export const TitleBar = ({ text }: Props) => {

    const style = {
        color: 'var(--app-yellow)',
        fontWeight:'bolder'
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <h2 style={style}>{text}</h2>
            </div>

        </>
    )
}
