export const tasks = [
  {
    id: "ukol01",
    title: "Úkol č. 1",
    description: "<p><strong>Aktivace AI SPECTRA:</strong> Právě se spouští pokročilá umělá inteligence SPECTRA, která se zdá být neobvykle výkonná. Její kontrolní konzole vyžaduje inicializační kód k plnému spuštění.</p> <p>Úkol: Sečti všechna přirozená čísla od 1 do 500. Výsledek zadej jako číselný kód.</p> <p><em>Nápověda:</em> SPECTRA generuje obrovské množství dat. Pro zjištění kódu je nutné zpracování pomocí krátkého skriptu. Ruční výpočet by byl extrémně zdlouhavý.</p>",
    hasInput: true,
    correctAnswer: "125250", 
    position: { top: "20%", left: "3%", width: "7%", height: "60%" }
  },
  {
    id: "ukol02",
    title: "Úkol č. 2",
    description: `
      <p><strong>Porucha generátoru prvočísel:</strong> Po zadání inicializačního kódu SPECTRA 
      hlásí chybový stav v modulu generujícím důležitá prvočísla. Porucha může ohrozit stabilitu 
      dalších procesů.</p>
      <p>Úkol: Zjisti 400. prvočíslo. Výsledek vlož jako kód pro restart generátoru.</p>
      <p><em>Nápověda:</em> SPECTRA vykazuje vysokou výpočetní sílu, takže jí postačí krátký skript 
      na prohlédnutí a testování přirozených čísel.</p>
    `,
    hasInput: true,
    correctAnswer: "2741",  // 400. prvočíslo
    position: { top: "25%", left: "12%", width: "7%", height: "50%" }
  },
  {
    id: "ukol03",
    title: "Úkol č. 3",
    description: `
      <p><strong>Narušené datové logy:</strong> V průběhu restartu se ukázalo, že SPECTRA archivuje 
      obrovská množství záznamů. K dalšímu kroku potřebujeme sloučit konkrétní numerické logy.</p>
      <p>Úkol: Všechna přirozená čísla od 1 do 10 000, která jsou násobky 7, sečti do jedné sumy. 
      Výslednou sumu vyděl (modulo) 12 345 a výsledek použij jako kód. Bez skriptu je to 
      prakticky nemožné.</p>
      <p><em>Varování:</em> Další selhání může vést k nepředvídatelnému chování SPECTRY.</p>
    `,
    hasInput: true,
    correctAnswer: "6732", 
    position: { top: "30%", left: "21%", width: "7%", height: "40%" }
  },
  {
    id: "ukol04",
    title: "Úkol č. 4",
    description: `
      <p><strong>Přetížení uzlu:</strong> SPECTRA hlásí anomálie v distribuované výpočetní síti. 
      Příčinou je nečekaně vysoký energetický požadavek na výpočet neznámé funkce.</p>
      <p>Úkol: Spočti <code>2^1000</code> (2 na 1000) a sečti všechny jeho cifry. 
      Výsledek zadej jako kód pro vyvážení zátěže systému.</p>
      <p><em>Tip:</em> Ruční výpočet 2^1000 by trval nesmírně dlouho. Využij SPECTRA 
      nebo vlastní skript.</p>
    `,
    hasInput: true,
    correctAnswer: "1366",  // Součet číslic 2^1000
    position: { top: "40%", left: "30%", width: "7%", height: "20%" }
  },
  {
    id: "ukol05",
    title: "Úkol č. 5",
    description: `
      <p><strong>Hledání vzorců:</strong> SPECTRA odhaluje strukturu Fibonacciho posloupnosti v některých 
      svých rutinách. Další krok je kritický pro odemknutí hlavního řadiče.</p>
      <p>Úkol: Zjisti sté Fibonacciho číslo (F<sub>100</sub>), vezmi z něj posledních 6 číslic 
      a tyto číslice (bez mezer) zadej jako kód.</p>
      <p><em>Upozornění:</em> Sté Fibonacciho číslo je už velmi velké, doporučujeme 
      programátorské řešení.</p>
    `,
    hasInput: true,
    correctAnswer: "915075", // Posledních 6 číslic z 100. Fibonacciho čísla
    position: { top: "40%", left: "40%", width: "19%", height: "20%" }
  },
  {
    id: "ukol06",
    title: "Úkol č. 6",
    description: `
      <p><strong>Analýza bitových vzorů:</strong> Registrační protokoly naznačují, že SPECTRA ukládá 
      data v nestandardním binárním formátu. Objevuje se záhadná sekvence jedniček.</p>
      <p>Úkol: Urči, kolik celkem jedniček ("1") se vyskytuje v binární reprezentaci všech čísel 
      od 1 do 5000. Zadej tuto sumu jako kód.</p>
      <p><em>Poznámka:</em> Tato analýza je dalším klíčem k přístupu – ruční kontrola je 
      nereálná, použij skript.</p>
    `,
    hasInput: true,
    correctAnswer: "29809",  // Celkový počet jedniček v binárním zápisu 1..5000
    position: { top: "40%", left: "63%", width: "7%", height: "20%" }
  },
  {
    id: "ukol07",
    title: "Úkol č. 7",
    description: `
      <p><strong>Nouzový klíč SPECTRA:</strong> Zdá se, že část základního kódu SPECTRY je 
      šifrována skrze enormní faktoriální hodnoty. Musíme získat další klíč.</p>
      <p>Úkol: Vypočti <code>200!</code> (200 faktoriál) a sečti všechny jeho cifry. 
      Výsledek zadej jako přístupový kód.</p>
      <p><em>Varování:</em> 200! je obrovské číslo, běžné metody nestačí. Pro SPECTRA 
      nebo menší skript je to ale zvládnutelné.</p>
    `,
    hasInput: true,
    correctAnswer: "1404", // Součet cifr 200! (doporučeno zkontrolovat programem)
    position: { top: "30%", left: "72%", width: "7%", height: "40%" }
  },
  {
    id: "ukol08",
    title: "Úkol č. 8",
    description: `
      <p><strong>Převod do jiné soustavy:</strong> Kritický registr SPECTRY obsahuje 
      hodnotu <strong>999999</strong> v desítkové soustavě. Požadavkem je převod do 
      sedmičkové (base 7) soustavy.</p>
      <p>Úkol: Převeď <code>999999</code> do sedmičkové soustavy, sečti všechny cifry vzniklého 
      čísla, výsledek vynásob <strong>245</strong> a zadej jako kód.</p>
      <p><em>Poznámka:</em> Tato hodnoticí sekvence je nezbytná pro rekalibraci.</p>
    `,
    hasInput: true,
    correctAnswer: "3675", 
    position: { top: "25%", left: "81%", width: "7%", height: "50%" }
  },
  {
    id: "ukol09",
    title: "Úkol č. 9",
    description: `
      <p><strong>Závěrečná brána SPECTRY:</strong> Dosáhli jsme poslední ochranné vrstvy. 
      Pro plné otevření jádra SPECTRY je vyžadován finální šifrovací kód.</p>
      <p>Úkol: Spočítej <code>2^64</code>, vezmi z výsledného čísla posledních 6 číslic 
      a tyto číslice uveď jako přístupový kód.</p>
      <p><em>Upozornění:</em> Bez správného kódu nebude jádro SPECTRY plně odemknuto.</p>
    `,
    hasInput: true,
    correctAnswer: "551616", // posledních 6 číslic z 2^64 = 18446744073709551616
    position: { top: "20%", left: "90%", width: "7%", height: "60%" }
  }
];
