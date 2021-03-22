import { Query } from './index';



const all = async () => Query('SELECT * FROM users');

export default{
    all
}
