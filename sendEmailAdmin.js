import nodemailer from "nodemailer";

const Email = (contenidomail) => {
  let transpoter = nodemailer.createTransport({
    host: "mail.eduaprendes.com",
    port: "465",
    auth: {
      user: "admin@eduaprendes.com",
      pass: "Javieroca123-",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  // let transpoter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: "587",
  //   auth: {
  //     user: "eurorondon03@gmail.com",
  //     pass: "iekifrpgehmtlucf",
  //   },
  //   tls: {
  //     rejectUnauthorized: false,
  //   },
  // });
  transpoter.sendMail(contenidomail, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send email
const EmailSenderAdmin = ({ totalPrice, _id, userName, email }) => {
  const contenidomail = {
    from: "Ecommers🛍️ admin@eduaprendes.com",
    to: "eurorondon03@gmail.com",
    subject: "Enhorabuena !!! has recibido una compra ",
    html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" ><img
              src="https://res.cloudinary.com/zpune/image/upload/v1652256707/random/favicon_hybtfj.png"
              style="width: 100%; height: 70px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              Form Shoeshop Store
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>Hola <b>Admin</b>, Has recibido una nueva compra, identificacion de compra : ${_id} , nombre del cliente : <b>${userName}<b>, por un monto total de ${totalPrice}  </p>
              <p> Procederemos a confirmar el pago, pronto te notificaremos .</p>
              
            </div>
          </div>
        </div>
      </div>
        `,
  };

  Email(contenidomail);
};

export default EmailSenderAdmin;
