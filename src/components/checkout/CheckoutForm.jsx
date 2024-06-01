const CheckoutForm = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
      <>
        <h2>Complete con sus datos para continuar</h2>
        <form className="form-checkout" onSubmit={handleSubmitForm}>
          <div className="box-input">
            <label>Nombre</label>
            <input type="text" name="name" value={dataForm.name} onChange={handleChangeInput} />
          </div>
  
          <div className="box-input">
            <label>Telefono</label>
            <input
              type="text"
              name="phone"
              value={dataForm.phone}
              onChange={handleChangeInput}
            />
          </div>
  
          <div className="box-input">
            <label>Email</label>
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
          </div>
  
          <button type="submit" className="button-submit">
            Enviar Orden
          </button>
        </form>
      </>
    );
  };
  export default CheckoutForm;
  