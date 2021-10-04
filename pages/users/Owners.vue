<template lang="">
  <section>
    <article class="newUser">
      <div class="titleCard"><p>Agregar nuevo dueño</p></div>
      <div class="contentCard">
        <form>
          <div>
          <label for="email">Email</label>
          <input id="email" type="email" autocomplete="off">
          </div>
          <div>
          <label for="contraseña">Contraseña</label>
          <input id="contraseña" type="text"  autocomplete="off">
          </div>
           <div>
          <label for="usuario">Usuario</label>
          <input id="usuario"  type="text" autocomplete="off">
          </div>
        </form>
      </div>
      <div class="containerAddBtn">
        <button>Agregar</button>
      </div>
    </article>
    <article class="userList">
       <div class="titleCard"><p>Lista de dueños</p></div>
     <table>
	<thead>
	<tr>
		<th>Usuario</th>
		<th>Contraseña</th>
		<th>Email</th>
    <th>Opciones</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td class="tdOptions"><img src="@/assets/icons/edit.svg"><img src="@/assets/icons/delete.svg"></td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	</tbody>
</table>
    </article>
  </section>
</template>
<script>
export default {
  name: 'Owners',
}
</script>
<style scoped>
section {
  background: var(--background-color);
  display: grid;
  grid-auto-flow: row;
  gap: 2rem 0;
  margin-top: 4rem;
  box-sizing: border-box;
  padding: 0 5rem;
}

article {
  background: white;
  border: 0;
  box-sizing: border-box;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
  border-radius: 0.375rem;
}

.newUser {
  max-height: 15rem;
}

.userList {
  height: 50rem;
}

.titleCard {
  padding: 1.25rem 1.5rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.titleCard p {
  font-size: 1.0625rem;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  color: #32325d;
}

label {
  color: #525f7f;
  font-size: 0.875rem;
  font-weight: 600;
}

input {
  width: 100%;
  height: 2rem;
  padding: 0.625rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8898aa;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  box-shadow: 0 3px 2px rgb(233 236 239 / 5%);
  box-sizing: border-box;
}

.contentCard {
  position: relative;
  box-sizing: border-box;
  padding: 1rem;
}

.contentCard form {
  display: grid;
  grid-auto-flow: column;
  box-sizing: border-box;
  gap: 0 1rem;
}

.contentCard form div {
  display: grid;
  grid-auto-flow: row;
}
.containerAddBtn {
  max-height: 4rem;
  display: grid;
  justify-items: end;
  padding-bottom: 1.25rem;
  padding-right: 1.5rem;
  box-sizing: border-box;
}

.containerAddBtn button {
  width: 8rem;
  height: 2rem;
  border: none;
  text-transform: none;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  font-size: 0.875rem;
  will-change: transform;
  color: #fff;
  background-color: #5e72e4;
  border-color: #5e72e4;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
  padding: 5px;
}

th {
  padding: 5px;
  background: #f6f9fc;
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  color: #8898aa;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
td {
  padding: 5px;
  border-bottom: 1px solid #ebeef5;
}
.tdOptions {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
}
</style>