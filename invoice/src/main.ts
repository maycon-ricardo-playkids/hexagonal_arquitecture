import AxiosAdapter from './AxiosAdapter';
import CalculateInvoice from './CalculateInvoice';
import CurrencyGatewayHttp from './CurrencyGatewayHttp';
import ExpressAdapter from './ExpressAdapter';
import InvoiceController from './InvoiceController';
import PgPromiseAdapter from './PgPromiseAdapter';
import TransactionDAODatabase from './TransactionDAODatabase';


const baseUrl = 'http://localhost:3001';

const connection = new PgPromiseAdapter();
const httpClient = new AxiosAdapter();
const transactionDao = new TransactionDAODatabase(connection);
const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl);

const calculateInvoice = new CalculateInvoice(transactionDao, currencyGateway);

const httpServer = new ExpressAdapter();

new InvoiceController(httpServer, calculateInvoice);

httpServer.listen(3000);
