Det har skjedd en del i det siste som gjør at jeg ikke fikk jobbet så mye med oppgaven som jeg skulle.
Derfor blir den levert litt på etterskudd, håper det går greit denne gangen.

Nettbutikken har seks forskjellige produkter med navn, pris, kategori og bildelink, som er lagret i en array. Ved å trykke på "kjøp"
kan man legge til varer i handlekurven, som man også kan få frem ved å trykke på handlekurv-ikonet. Det er ikke mulig å legge til
mer enn en av samme vare.
I tillegg til å legges til som et element, blir også varen lagt til i en array for å kunne regne ut pris. Når man
fjerner en vare fra handlekurven vil man også fjerne den fra arrayen. I tillegg har butikken også mulighet
til å filtrere varer basert på kategori. Flere filtere kan velges på en gang. Hvis ingen er valgt vil ingen av varene filtreres.
Det er også lagt til mulighet for å søke, hvis ingen søkeord passer, for man feilmelding.
Selve varevisningen er en flexbox, mens filterne er presentert i en grid. Selve handlekurvvarene viser innholdet sitt ved hjelp av flex.

Når det kommer til universell utforming har jeg eksperimentert med em, rem, % vh, vw osv. Jeg har også lagt til slik at hvis skjermen
er mindre enn 900px, vil filtermenyen gjemme seg til siden, så kan man få den fram igjen ved å trykke på "Vis filter"-knappen,
som kommer frem da. Siden er inspirert av andre nettbutikker for elektronikk, som komplett.no og elkjop.no.

Av funksjoner som ble vurdert, men ikke lagt til i denne omgang, vurderte jeg egne produktsider og at man kan legge til mer enn en vare om gangen og å ha en egen kasseside.