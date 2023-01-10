
import { peaceInfo } from '../planPeaceContent'
import Gigantes from './Gigantes'
export default function Peace({ params: { peace } }) {
    const peaceDetail = peaceInfo.find(info => info.slug === peace)
    const peaceSuggestions = peaceInfo.filter(info => info.slug !== peace)
    return (
        <Gigantes suggestions={peaceSuggestions} info={peaceDetail} />
    )
}