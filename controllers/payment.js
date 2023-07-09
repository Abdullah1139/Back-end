import axios from 'axios';
import crypto from 'crypto';

export const jazzcashPayment = async (req, res) => {
  const IntegeritySalt = 'a9wydstze3';
  const pp_Amount = '100';
  const pp_BillReference = 'billRef';
  const pp_Description = 'Description';
  const pp_Language = 'EN';
  const pp_MerchantID = 'MC58324';
  const pp_Password = 'vv9298e659';
  const pp_ReturnURL =
    'https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction';
  const pp_ver = '1.1';
  const pp_TxnCurrency = 'PKR';
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  const dateandtime = year + month + day + hours + minutes + seconds;

  // Rest of the code...

  const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const years = expirationDate.getFullYear().toString();
  const months = (expirationDate.getMonth() + 1).toString().padStart(2, '0');
  const days = expirationDate.getDate().toString().padStart(2, '0');
  const hourss = expirationDate.getHours().toString().padStart(2, '0');
  const minute = expirationDate.getMinutes().toString().padStart(2, '0');
  const second = expirationDate.getSeconds().toString().padStart(2, '0');

  const dexpiredate = years + months + days + hourss + minute + second;

  // Rest of the code...

  const tre = 'T' + dateandtime;
  const pp_TxnDateTime = dateandtime.toString();
  const pp_TxnExpiryDateTime = dexpiredate.toString();
  const pp_TxnRefNo = tre.toString();
  const pp_TxnType = 'MWALLET';
  const ppmpf_1 = '03123456789';

  const and = '&';
  const superdata =
    IntegeritySalt +
    and +
    pp_Amount +
    and +
    pp_BillReference +
    and +
    pp_Description +
    and +
    pp_Language +
    and +
    pp_MerchantID +
    and +
    pp_Password +
    and +
    pp_ReturnURL +
    and +
    pp_TxnCurrency +
    and +
    pp_TxnDateTime +
    and +
    pp_TxnExpiryDateTime +
    and +
    pp_TxnRefNo +
    and +
    pp_TxnType +
    and +
    pp_ver +
    and +
    ppmpf_1;

  const key = Buffer.from(IntegeritySalt, 'utf8');
  const hmac = crypto.createHmac('sha256', key);
  hmac.update(superdata);
  const sha256Result = hmac.digest('hex');
  console.log(pp_TxnDateTime);
  const url =
    'https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction';

  const postData = {
    pp_Version: pp_ver,
    pp_TxnType: pp_TxnType,
    pp_Language: pp_Language,
    pp_MerchantID: pp_MerchantID,
    pp_SubMerchantID: '123456789',
    pp_RetrievalReferenceNo: '123456789',
    pp_BankID: 'TBANK',
    pp_AuthCode: '345678',
    pp_Password: pp_Password,
    pp_TxnRefNo: tre,
    pp_Amount: pp_Amount,
    pp_TxnCurrency: pp_TxnCurrency,
    pp_TxnDateTime: dateandtime,
    pp_BillReference: pp_BillReference,
    pp_Description: pp_Description,
    pp_TxnExpiryDateTime: dexpiredate,
    pp_ReturnURL: pp_ReturnURL,
    pp_SecureHash: sha256Result.toString(),
    ppmpf_1: ppmpf_1,
  };
  console.log(superdata);
  axios
    .post(url, postData)
    .then((response) => {
      console.log('response =>');
      console.log(response);
      if (response.status === 200) {
        res.send(response.data);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
