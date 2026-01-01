export default function Tabs({children, buttons, ButtonWrapper}) {
    return (
        <>
            <ButtonWrapper>
                {buttons}
            </ButtonWrapper>
            {children}
        </>
    );
}