import React from "react";

const Card = (props: {isUp: boolean}) => {
    return <span>
        {props.isUp ? 'up' : 'down'}
    </span>
}

export const Cards = (props: { amount: number }) => {
    const [selectedCardNumber, setSelectedCardNumber] = React.useState<number | undefined>();

    return <table>
        <tbody>
            <tr>
                {Array.from({ length: props.amount }).map((_, i) => {
                    return <td key={i} onClick={() => setSelectedCardNumber(i)}>
                        <Card isUp={selectedCardNumber === i} />
                    </td>
                })}
            </tr>
        </tbody>

    </table>;
}