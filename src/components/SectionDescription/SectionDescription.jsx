import { useState } from "react";
import {
  MainTitle,
  SectionDescr,
  SpanColor,
  DescriptionContainer,
  DescriptionList,
  SectionDescrUp,
  MoreBtn,
} from "./SectionDescription.styled";

const SectionDescription = () => {
  const [descriptionOut, setDescriptionOut] = useState(false);
  return (
    <DescriptionContainer>
      <MainTitle>Športová výživa</MainTitle>
      <SectionDescr>
        <strong> Športová výživa</strong> je kategória produktov, ktorá pod
        jednou strechou ponúka desiatky rôznych druhov výživových doplnkov pre
        športovcov. Patria medzi ne{" "}
        <SpanColor href="https://gymbeam.sk/3-proteiny" target="_blank">
          proteíny
        </SpanColor>
        ,{" "}
        <SpanColor href="https://gymbeam.sk/aminokyseliny" target="_blank">
          aminokyseliny
        </SpanColor>
        ,{" "}
        <SpanColor href="https://gymbeam.sk/5-gainery" target="_blank">
          gainery a sacharidy
        </SpanColor>
        ,{" "}
        <SpanColor href="https://gymbeam.sk/33-spalovace-tukov" target="_blank">
          spaľovače tukov
        </SpanColor>
        ,{" "}
        <SpanColor href="https://gymbeam.sk/23-klbova-vyziva" target="_blank">
          kĺbová výživa
        </SpanColor>
        ,{" "}
        <SpanColor
          href="https://gymbeam.sk/86-anabolizerystimulanty"
          target="_blank"
        >
          anabolizéry a stimulanty
        </SpanColor>{" "}
        alebo{" "}
        <SpanColor href="https://gymbeam.sk/vitaminy" target="_blank">
          vitamíny
        </SpanColor>{" "}
        <strong>a</strong>{" "}
        <SpanColor href="https://gymbeam.sk/mineraly-1" target="_blank">
          minerálne látky
        </SpanColor>
        .
      </SectionDescr>
      <p>
        Sú určené <strong>pre silových športovcov, bežcov, cyklistov</strong> a
        všetkých ostatných <strong>fanúšikov zdravého životného štýlu</strong>,
        ktorým prinášajú dobrú energiu pre každý šport. Nielen ten fyzický, ale
        aj elektronický, čo ocenia hlavne{" "}
        <SpanColor href="https://gymbeam.sk/gaming" target="_blank">
          gameri
        </SpanColor>
        . Výživa v športe či e-športe totiž patrí medzi kľúčové piliere, vďaka
        ktorým môžete ľahšie dosiahnuť svoje ciele.
      </p>
      {descriptionOut && (
        <>
          <SectionDescrUp>
            Produkty z tejto kategórie svojim špecifickým zložením pomáhajú{" "}
            <strong>
              zlepšiť športový výkon, posúvať limity, budovať svalovú hmotu,
              chudnúť či regenerovať
            </strong>
            . Vyberte si z pestrej ponuky a pocíťte kúzlo športovej výživy na
            vlastnej koži.{" "}
          </SectionDescrUp>
          <DescriptionList>
            <li>
              <p>
                Ak sa chcete dozvedieť viac o základných doplnkoch na cvičenie,
                pozrite si náš článok{" "}
                <SpanColor
                  href="https://gymbeam.sk/blog/efektivne-doplnky-vyzivy/"
                  target="_blank"
                >
                  Základné doplnky na cvičenie a ako sa v nich vyznať
                </SpanColor>
                .
              </p>
            </li>
            <li>
              <p>
                V prípade, že naopak hľadáte doplnky pre vytrvalcov, ich
                prehľad, výhody a dávkovanie nájdete v článku{" "}
                <SpanColor
                  href="https://gymbeam.sk/blog/11-najlepsich-doplnkov-stravy-pre-beh-cyklistiku-a-dalsie-vytrvalostne-sporty/"
                  target="_blank"
                >
                  11 najlepších doplnkov stravy pre beh, cyklistiku a ďalšie
                  vytrvalostné športy
                </SpanColor>
                .
              </p>
            </li>
          </DescriptionList>
        </>
      )}
      <MoreBtn type="button" onClick={() => setDescriptionOut(!descriptionOut)}>
        {!descriptionOut ? "Zobraziť viac " : "Zobraziť menej"}
      </MoreBtn>
    </DescriptionContainer>
  );
};

export default SectionDescription;
