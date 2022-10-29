import { getXataClient } from '../../utils/xata.codegen'
const xata = getXataClient()

const handler = async (req, res) => {

    const xata = getXataClient()

    const records = await xata.db.basic_info.getAll()


    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({ records }));


    res.end()

    // console.log(records)
    // res.end(JSON.stringify(records));
    // res.end()


}
export default handler



