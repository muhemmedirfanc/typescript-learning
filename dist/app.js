"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const api_1 = __importDefault(require("./routes/api"));
const app = express_1.default();
app.use(morgan_1.default('dev'));
app.get('/', (req, res) => { res.json({ status: 'ok' }).status(200); });
app.listen(5000, () => console.log('Server running at port 5000'));
app.use('/api', api_1.default);
