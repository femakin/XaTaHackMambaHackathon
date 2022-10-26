import { getXataClient } from '../../utils/xata.codegen'
const xata = getXataClient()

const handler = async (req, res) => {

    const xata = getXataClient()

    const records = await xata.db.basic_info.getAll()

    console.log(records)
    res.end(JSON.stringify(records));


}
export default handler



