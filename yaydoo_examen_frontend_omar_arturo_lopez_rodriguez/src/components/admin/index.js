import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { logout } from "../../middleware/Authentication";
import { deleteUser, getUsers, newUser, updateUser } from "../services";
import { CardBody, CardButton, CardFieldset, CardHeader, CardHeading, CardWrapper } from "./../common/Card.styled";
const Admin = () => {
   const [users, setusers] = useState([]);
   const history = useHistory();
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [adress, setAdress] = useState("");
   const [birthdate, setBirthdate] = useState("");
   const [password, setPassword] = useState("");

   const getListUser = async () => {
      const response = await getUsers();
      if (response.status === 401) {
         logout();
         history.push("/");
      } else {
         console.log(response.data.allUserInf);
         setusers(response.data.allUserInf);
      }
   };
   const minTwoDigits = (n) => {
      return (n < 10 ? "0" : "") + n;
   };
   const formatDate = (current_datetime) => {
      let mes = current_datetime.getMonth() + 1; //obteniendo mes
      let dia = current_datetime.getDate(); //obteniendo dia
      let ano = current_datetime.getFullYear(); //obteniendo año
      let hora = current_datetime.getHours(); //obteniendo hora
      let minutos = current_datetime.getMinutes(); //obteniendo minuto
      let formatted_date =
         ano +
         "-" +
         minTwoDigits(mes) +
         "-" +
         minTwoDigits(dia) +
         "T" +
         minTwoDigits(hora) +
         ":" +
         minTwoDigits(minutos);
      return formatted_date;
   };
   const handlersUpdate = (e, user) => {
      e.preventDefault();
      let born = new Date(user.information.birthdate);
      console.log(formatDate(born));
      born = formatDate(born);

      Swal.fire({
         title: user.name,
         html: `
					<input type="text" id="name" class="swal2-input" placeholder="Nombre" value="${user.name}">
					<input type="text" id="email" class="swal2-input" placeholder="Email" value="${user.email}">
					<input type="text" id="phone" class="swal2-input" placeholder="Telefono" value="${user.information.phone}">
					<input type="text" id="address" class="swal2-input" placeholder="Direccion" value="${user.information.address}">
					<input type="datetime-local" id="birthdate" class="swal2-input" placeholder="Nombre" value="${born}" style=" max-width:279px;">


					`,
         // <input type="password" id="password" class="swal2-input" placeholder="*******">
         showCancelButton: true,
         confirmButtonText: "Actualizar",
         cancelButtonText: "Cancelar",
         showLoaderOnConfirm: true,
         preConfirm: async () => {
            const name = Swal.getPopup().querySelector("#name").value;
            const email = Swal.getPopup().querySelector("#email").value;
            const phone = Swal.getPopup().querySelector("#phone").value;
            const address = Swal.getPopup().querySelector("#address").value;
            const birthdate = Swal.getPopup().querySelector("#birthdate").value;
            // const password = Swal.getPopup().querySelector("#password").value;
            if (!name || !email || !phone || !address || !birthdate) {
               Swal.showValidationMessage(`Por favor llena todos los campos`);
            }
            let userUpdate = {
               user: {
                  name: name,
                  email: email,
                  password: "123455",
                  id: user.id,
                  information: {
                     address: address,
                     phone: phone,
                     birthdate: birthdate,
                     user_id: user.id,
                  },
               },
            };
            console.log(userUpdate);
            await updateUser(userUpdate);
            await getListUser();
         },
         allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
         if (result.isConfirmed) {
            // Swal.fire({
            //    title: `${user.name}'s `,
            //    imageUrl: result.value.avatar_url,
            // });
         }
      });
   };

   const handlersAddUser = (e) => {
      e.preventDefault();

      Swal.fire({
         title: "Nuevo usuario",
         html: `
					<input type="text" id="name" class="swal2-input" placeholder="Nombre" >
					<input type="text" id="email" class="swal2-input" placeholder="Email" >
					<input type="text" id="phone" class="swal2-input" placeholder="Telefono" >
					<input type="text" id="address" class="swal2-input" placeholder="Direccion" >
					<input type="datetime-local" id="birthdate" class="swal2-input" placeholder="Nombre" style=" max-width:279px;">

					<input type="password" id="password" class="swal2-input" placeholder="*******">


					`,

         showCancelButton: true,
         confirmButtonText: "Agregar",
         cancelButtonText: "Cancelar",
         showLoaderOnConfirm: true,
         preConfirm: async () => {
            const name = Swal.getPopup().querySelector("#name").value;
            const email = Swal.getPopup().querySelector("#email").value;
            const phone = Swal.getPopup().querySelector("#phone").value;
            const address = Swal.getPopup().querySelector("#address").value;
            const birthdate = Swal.getPopup().querySelector("#birthdate").value;
            const password = Swal.getPopup().querySelector("#password").value;
            if (!name || !email || !phone || !address || !birthdate) {
               Swal.showValidationMessage(`Por favor llena todos los campos`);
            }
            let userUpdate = {
               user: {
                  name: name,
                  email: email,
                  password: password,

                  information: {
                     address: address,
                     phone: phone,
                     birthdate: birthdate,
                  },
               },
            };
            console.log(userUpdate);
            await newUser(userUpdate);
            await getListUser();
         },
         allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
         if (result.isConfirmed) {
            // Swal.fire({
            //    title: `${user.name}'s `,
            //    imageUrl: result.value.avatar_url,
            // });
         }
      });
   };

   const handlersDelete = (e, user) => {
      e.preventDefault();

      Swal.fire({
         title: "Desea eliminar el usuario",
         html: `<h1>${user.name}</h1>`,

         showCancelButton: true,
         confirmButtonText: "Eliminar",
         cancelButtonText: "Cancelar",
         showLoaderOnConfirm: true,
         preConfirm: async () => {
            await deleteUser(user.id);
            await getListUser();
         },
         allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
         if (result.isConfirmed) {
            // Swal.fire({
            //    title: `${user.name}'s `,
            //    imageUrl: result.value.avatar_url,
            // });
         }
      });
   };
   useEffect(() => {
      getListUser();
   }, []);
   return (
      <div>
         <CardFieldset
            style={{
               display: "flex",
               textAlign: "center",
               justifyContent: "center",
               marginTop: "20px",
            }}
         >
            <CardButton
               onClick={(e) => handlersAddUser(e)}
               type="button"
               width="30%"
               style={{
                  backgroundColor: "#1ED493",
               }}
            >
               Agregar
            </CardButton>
         </CardFieldset>
         {users.map((user) => {
            if (!user.information) {
               user = {
                  ...user,
                  information: {
                     address: "",
                     phone: "",
                     birthdate: "",
                  },
               };
            }
            return (
               <CardWrapper key={user.id}>
                  <CardHeader>
                     <CardHeading>{user.name}</CardHeading>
                  </CardHeader>

                  <CardBody>
                     <CardFieldset>
                        <span>Nombre:{user.name}</span>
                        {/* <CardInput placeholder="name" type="text" value={user.name} required /> */}
                     </CardFieldset>

                     <CardFieldset>Email:{user.email}</CardFieldset>
                     <CardFieldset>Tel:{user.information.phone}</CardFieldset>
                     <CardFieldset>Cumpleaños:{user.information.birthdate}</CardFieldset>
                     <CardFieldset>Direccion:{user.information.address}</CardFieldset>
                     <CardFieldset>Edad:{user.age} años</CardFieldset>

                     {/* <CardFieldset>
                        <CardInput placeholder="Password" type="password" required />
                        <CardIcon className="fa fa-eye" eye small />
                     </CardFieldset> */}

                     <CardFieldset>
                        <CardButton
                           type="button"
                           style={{
                              marginTop: "20px",
                              backgroundColor: "#4D7AF3",
                           }}
                           onClick={(e) => handlersUpdate(e, user)}
                        >
                           Editar
                        </CardButton>
                        <CardButton
                           style={{
                              marginTop: "20px",
                              backgroundColor: "#ff2d37",
                           }}
                           onClick={(e) => handlersDelete(e, user)}
                           type="button"
                        >
                           Eliminar
                        </CardButton>
                     </CardFieldset>
                  </CardBody>
               </CardWrapper>
            );
         })}
      </div>
   );
};

export default Admin;
