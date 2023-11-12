import { MongoClient, Db } from "mongodb";

const client = new MongoClient('mongodb+srv://store_23:store_23@cluster0.kcamuno.mongodb.net/store_db?retryWrites=true&w=majority');

export let db:Db; 

async function main() {
    try {
        await client.connect();
        db = client.db('store_db');
        return 'done.';
    } catch (err) {
        return err
    }
}

export default main