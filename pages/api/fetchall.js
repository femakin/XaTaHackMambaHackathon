import { getXataClient } from '../../utils/xata.codegen'
const xata = getXataClient()

const handler = async (req, res) => {

    const xata = getXataClient()

    const records = await xata.db.basic_info.getAll()


    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(records))


        // res.end()

        //  res.end()

        .then((data) => {
            res.end(JSON.stringify(data));
        })
        .catch((err) => {
            res.end(JSON.stringify(err));
            res.end()
        })
    console.log(record, 'record')
    res.end(JSON.stringify(record));
    resolve();
    res.end(JSON.stringify(res));


    // console.log(records)
    // res.end(JSON.stringify(records));
    // res.end()


}
export default handler



