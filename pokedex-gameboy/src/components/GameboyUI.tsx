const GameboyUI = () => {
  return (
    <section>
      <img src="#" className="pokemon__image" alt="pokemon image" />

      <h1 className="pokemon__data">
        <span className="pokemon__number"></span> -
        <span className="pokemon__name"></span>
      </h1>

      <form className="form">
        <input
          type="search"
          className="input__search"
          placeholder="Name or Number"
          required
        />
      </form>

      <div className="buttons">
        <button className="button btn-prev">Prev &lt;</button>
        <button className="button btn-prev">Next &gt;</button>
      </div>
    </section>
  )
}

export default GameboyUI
