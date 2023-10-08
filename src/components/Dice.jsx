import Die from './Die.jsx'

export default function Dice ({ dice, color="pink" }) {
    return (
        <section className="Dice">
                    {dice.map((v, i) => (
                        <Die key={i} val={v} color={color} />
                        ))}
        </section>
    )
}