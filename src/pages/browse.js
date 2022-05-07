
import { useContent } from "../hooks"

export default function Browse() {

    // we nee the series and the films
    const { series } = useContent('series')
    const { films } = useContent('films')
    console.table(series)
    console.table(films)
    // we need slides
    // pass it to the browse container
    return <p>Hello form the Browse!</p>
}