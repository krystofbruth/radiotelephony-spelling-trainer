<template>
  <section class="CheatSheet">
    <article>
      <p>alpha</p>
      <img src="/alphabet-symbols/alpha.svg" alt="Alpha greek letter" />
    </article>
    <article>
      <p>bravo</p>
      <img src="/alphabet-symbols/bravo.svg" alt="Clapping symbol" />
    </article>
    <article>
      <p>charlie</p>
      <img src="/alphabet-symbols/charlie.svg" alt="Person symbol" />
    </article>
    <article>
      <p>delta</p>
      <img src="/alphabet-symbols/delta.svg" alt="Delta greek letter" />
    </article>
    <article>
      <p>echo</p>
      <img src="/alphabet-symbols/echo.svg" alt="Sound waves" />
    </article>
    <article>
      <p>foxtrot</p>
      <img src="/alphabet-symbols/foxtrot.svg" alt="Firefox logo" />
    </article>
    <article>
      <p>golf</p>
      <img src="/alphabet-symbols/golf.svg" alt="Golf ball" />
    </article>
    <article>
      <p>hotel</p>
      <img src="/alphabet-symbols/hotel.svg" alt="Bed" />
    </article>
    <article>
      <p>india</p>
      <img src="/alphabet-symbols/india.svg" alt="India cutout" />
    </article>
    <article>
      <p>juliet</p>
      <img src="/alphabet-symbols/juliet.svg" alt="Woman symbol" />
    </article>
    <article>
      <p>kilo</p>
      <img src="/alphabet-symbols/kilo.svg" alt="Kilogram weight" />
    </article>
    <article>
      <p>lima</p>
      <img src="/alphabet-symbols/lima.svg" alt="Limes" />
    </article>
    <article>
      <p>mike</p>
      <img src="/alphabet-symbols/mike.svg" alt="Microphone symbol" />
    </article>
    <article>
      <p>november</p>
      <img src="/alphabet-symbols/november.svg" alt="Calendar with number 11" />
    </article>
    <article>
      <p>oscar</p>
      <img src="/alphabet-symbols/oscar.svg" alt="Oscar prize" />
    </article>
    <article>
      <p>papa</p>
      <img src="/alphabet-symbols/papa.svg" alt="Father and son" />
    </article>
    <article>
      <p>quebec</p>
      <img src="/alphabet-symbols/quebec.svg" alt="Maple symbol" />
    </article>
    <article>
      <p>romeo</p>
      <img src="/alphabet-symbols/romeo.svg" alt="Man symbol" />
    </article>
    <article>
      <p>sierra</p>
      <img
        src="/alphabet-symbols/sierra.svg"
        alt="Mountains (sierra in spanish)"
      />
    </article>
    <article>
      <p>tango</p>
      <img src="/alphabet-symbols/tango.svg" alt="Dancing symbol" />
    </article>
    <article>
      <p>uniform</p>
      <img src="/alphabet-symbols/uniform.svg" alt="Police uniform" />
    </article>
    <article>
      <p>victor</p>
      <img src="/alphabet-symbols/victor.svg" alt="Victory prize symbol" />
    </article>
    <article>
      <p>whiskey</p>
      <img src="/alphabet-symbols/whiskey.svg" alt="Whiskey bottle" />
    </article>
    <article>
      <p>x-ray</p>
      <img src="/alphabet-symbols/xray.svg" alt="Xray paper" />
    </article>
    <article>
      <p>yankee</p>
      <img src="/alphabet-symbols/yankee.svg" alt="Baseball ball" />
    </article>
    <article>
      <p>zulu</p>
      <img src="/alphabet-symbols/zulu.svg" alt="African tribe shield" />
    </article>
  </section>
</template>

<style scoped>
section.CheatSheet {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem;
}

section.CheatSheet > article {
  border: 0.2rem solid var(--terciary-background);
  padding: calc(var(--padding) / 2);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 9rem;
  gap: 1rem;
}

section.CheatSheet p {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.4rem;
}

section.CheatSheet img {
  filter: invert() brightness(0.8);
  height: 5.5rem;
}
</style>
