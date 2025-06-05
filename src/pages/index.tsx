import Head from "next/head";
import {useEffect} from "react";
import postData from "./postData"

export default function Home() {

    useEffect(()=>{
        if(typeof window !== "undefined" && window.innerWidth > 1024) {
            const hero7Text = document.querySelector('.hero7 .text') as HTMLElement
            hero7Text.style.height = `${hero7Text.offsetHeight}px`
        }
    }, [])

    function osszetevo(element: HTMLElement) {
        const description = element.nextElementSibling as HTMLElement
        if(description.classList.contains("visible")) {
            element.classList.remove('visible')
            description.style.height = "0"
            description.classList.remove('visible')
        } else{
            document.querySelectorAll<HTMLParagraphElement>('.osszetevo p.visible').forEach(item => {
                item.previousElementSibling!.classList.remove('visible')
                item.style.height = "0"
                item.classList.remove('visible')
            })
            element.classList.add('visible')
            description.style.height = "inherit"
            const height = description.offsetHeight
            description.style.height = "0"
            description.classList.add('visible')
            setTimeout(()=>description.style.height = `${height}px`, 50)
        }
    }
    let sliderPos = typeof window !== "undefined" && window.innerWidth > 1024 ? 3 : 2;
    function slider(direction: "left" | "right") {
        const item = document.querySelector('.hero5 .item') as HTMLElement
        const itemWidth = item.offsetWidth
        if(window.innerWidth > 1024){
            if(direction === "right") {
                document.querySelector('.hero5 .arrow.right')?.classList.remove('hidden')
                const slider = document.querySelector('.hero5 .slider') as HTMLElement
                sliderPos++;
                if(sliderPos === 4){
                    slider.style.transform = `translateX(-${itemWidth+10}px)`
                    document.querySelector('.hero5 .arrow.left')?.classList.remove('hidden')
                }
                if(sliderPos === 5){
                    slider.style.transform = `translateX(-${(itemWidth+10)*2}px)`
                    document.querySelector('.hero5 .arrow.right')?.classList.add('hidden')
                }
            }
            if(direction === "left") {
                const slider = document.querySelector('.hero5 .slider') as HTMLElement
                if(sliderPos === 4){
                    slider.style.transform = `translateX(0px)`
                    document.querySelector('.hero5 .arrow.right')?.classList.remove('hidden')
                    document.querySelector('.hero5 .arrow.left')?.classList.add('hidden')
                }
                if(sliderPos === 5){
                    slider.style.transform = `translateX(-${itemWidth+10}px)`
                    document.querySelector('.hero5 .arrow.right')?.classList.remove('hidden')
                }
                sliderPos--;
            }
        } else {
            if(direction === "right") {
                document.querySelector('.hero5 .arrow.right')?.classList.remove('hidden')
                const slider = document.querySelector('.hero5 .slider') as HTMLElement
                sliderPos++;
                if(sliderPos === 3){
                    slider.style.transform = `translateX(-${itemWidth+10}px)`
                    document.querySelector('.hero5 .arrow.left')?.classList.remove('hidden')
                }
                if(sliderPos === 4){
                    slider.style.transform = `translateX(-${(itemWidth+10)*2}px)`
                }
                if(sliderPos === 5){
                    slider.style.transform = `translateX(-${(itemWidth+10)*3}px)`
                    document.querySelector('.hero5 .arrow.right')?.classList.add('hidden')
                }
            }
            if(direction === "left") {
                const slider = document.querySelector('.hero5 .slider') as HTMLElement
                if(sliderPos === 3){
                    slider.style.transform = `translateX(0px)`
                    document.querySelector('.hero5 .arrow.right')?.classList.remove('hidden')
                    document.querySelector('.hero5 .arrow.left')?.classList.add('hidden')
                }
                if(sliderPos === 4){
                    slider.style.transform = `translateX(-${itemWidth+10}px)`
                }
                if(sliderPos === 5){
                    slider.style.transform = `translateX(-${(itemWidth+10)*2}px)`
                    document.querySelector('.hero5 .arrow.right')?.classList.remove('hidden')
                }
                sliderPos--;
            }
        }
    }

    function shippingCheck() {
        const input = document.getElementById("shippingCheck") as HTMLInputElement
        if (input.checked == true) {
            document.getElementById("shippingInputs")!.style.display = "block";
        } else {
            document.getElementById("shippingInputs")!.style.display = "none";
        }
    }

    useEffect(()=>{
        document.querySelector('.hero11 .qty')?.addEventListener('click', (e)=>{
            document.querySelectorAll('.hero11 .qty button').forEach(button=>button.classList.remove('active'))
            const button = e.target as HTMLButtonElement
            button.classList.toggle('active')
        })
    }, [])
    
    
    
    
  return (
    <>
      <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Egresi Kata Cosmetics</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link
              href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"/>
      </Head>


        <div id="alert-cart"></div>

        <section className="logo">
            <img src="/egresi-kata-cosmetics/logo.png" alt="Egresi Kata Cosmetics"/>
        </section>

        <section className="hero1">
            <div>
                <img src="/egresi-kata-cosmetics/hero1.jpg"/>
                <div className="text">
                <h3>Tudod, mire van igazán szüksége a bőrödnek 35 után?</h3>
                    <p>Ne aggódj, nem vagy egyedül. 35 felett másra van szüksége a bőrnek. Több törődésre, erősebb hatóanyagokra – de természetes formában. Egy jól megválasztott anti-aging arckrémmel nem csak a bőröd lesz hálás... hanem te magad is, amikor visszanézel a tükörből.</p>
                    <a href="#ajanlat" className="cta">Megoldás</a>
                </div>
            </div>
        </section>

        <section className="hero2">
            <div>
                <div className="text">
                    <h3>Miért olyan nehéz megtalálni az ideális arckrémet?</h3>
                    <p>A legtöbb krém:</p>
                    <ul>
                        <li>nem hidratál,</li>
                        <li>nem szívódik fel jól, zsíros érzetet hagy,</li>
                        <li>tele van káros összetevőkkel,</li>
                        <li>gyakran allergiás reakciót okoz,</li>
                        <li>és ami a legfontosabb: nem hoz valódi, látványos eredményt.</li>
                    </ul>
                    <p>Nem könnyű megtalálni azt az arckrémet, ami tényleg működik. Valószínűleg te is kipróbáltál már ezt-azt. Talán túl sok mindent is. És ha most itt vagy, akkor jó eséllyel nem akarsz már újabb felesleges köröket futni. Érthető – az idő és a pénz drága, a bosszúság pedig senkinek sem hiányzik. Mi pontosan ezért alkottuk meg ezt az arckrémet: hogy végre ne kelljen tovább keresned.</p>
                </div>
                <img src="/egresi-kata-cosmetics/hero2.jpg"/>
            </div>
        </section>

        <section className="hero3">
            <div>
                <h3>Mit szólsz?<br/>Készen állsz valami újra?</h3>
                <a href="#ajanlat" className="cta">Igen!</a>
            </div>
        </section>

        <section className="hero4">
            <div>
                <img src="/egresi-kata-cosmetics/hero4.jpg"/>
                <div className="text">
                    <h3>Természetes hatás.<br/>
                        Páratlan eredmény.<br/>
                        35 felett is.</h3>
                    <p>Az Egresi Kata Anti-aging arckrém nem ígér csodát – hanem látható eredményt hoz.</p>
                    <p>Gazdag, természetes hatóanyag-kombinációjának köszönhetően intenzíven hidratál, nyugtat, feszesít és ragyogóbbá teszi a bőrt – anélkül, hogy irritálna vagy zsíros érzetet hagyna maga után. Gyorsan felszívódik, nem tartalmaz felesleges vegyi anyagokat, és mindent tud, amire a 35 feletti bőrnek igazán szüksége van.</p>
                    <p>Próbáld ki kockázatmentesen, 30 napos garanciával – és nézd meg, mire képes a természet, ha jól van összeállítva.</p>
                    <a href="#ajanlat" className="cta">Érdekel</a>
                </div>
            </div>
        </section>

        <section className="hero5">
            <h3>A hűséges bőrápoló segéded<br/>főbb tulajdonságai</h3>
            <div>


                <div className="arrow left hidden" onClick={()=>slider("left")}></div>
                <div className="arrow right" onClick={()=>slider("right")}></div>

                <div className="items">
                    <div className="slider">
                        <div className="item">
                            <img src="/egresi-kata-cosmetics/hero5-1.jpg"/>
                            <div className="title">Botox-hatás természetesen</div>
                        </div>
                        <div className="item">
                            <img src="/egresi-kata-cosmetics/hero5-2.jpg"/>
                            <div className="title">Természetes összetevők tudatos harmóniában</div>
                        </div>
                        <div className="item">
                            <img src="/egresi-kata-cosmetics/hero5-3.jpg"/>
                            <div className="title">Selymes textúra,<br/>tiszta fehér szín</div>
                        </div>
                        <div className="item">
                            <img src="/egresi-kata-cosmetics/hero5-4.jpg"/>
                            <div className="title">Gyorsan felszívódik,<br/>nem hagy zsíros nyomot</div>
                        </div>
                        <div className="item">
                            <img src="/egresi-kata-cosmetics/hero5-5.jpg"/>
                            <div className="title">Szakmai tapasztalat és<br/>szenvedély egy tégelyben</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="hero6">
            <div>
                <div className="text">
                    <img src="/egresi-kata-cosmetics/hero6-1.jpg"/>
                    <h3>Ez a krém nem csak ápol, hanem több szinten hat</h3>
                    <p>Hidratál, táplál, csökkenti a gyulladást. Segít a ráncok kisimításában. Feszesít, puhít, ragyogóbbá teszi arcod, mindezt természetesen, irritáció nélkül.</p>
                </div>
                <img src="/egresi-kata-cosmetics/hero6.jpg"/>
            </div>
        </section>

        <section className="hero7">
            <div>
                <img src="/egresi-kata-cosmetics/hero7.jpg"/>
                <div className="text">
                    <h3>Összetevők</h3>
                    <p>Az Egresi Kata Anti-aging arckrém a legmodernebb bőrápoló hatóanyagokat ötvözi a természet ősi, megnyugtató erejével. A shea vaj, aloe vera, argánolaj és fermentált növényi hidratálók önmagukban is csodát művelnek – de ha szakértelemmel párosulnak a legújabb peptid- és kollagéntechnológiával, az eredmény valóban látványos.</p>
                    <p>A termék 100%-ban natúr hatóanyagokból tevődik össze!</p>
                    <div className="osszetevo">
                        <h6 onClick={(e)=>osszetevo(e.currentTarget)}>Shea vaj</h6>
                        <p>A shea vaj az egyik leghatékonyabb természetes bőrápoló, amely mélyen hidratálja és táplálja a bőrt. Magas zsírsav- és vitamintartalmának köszönhetően segít visszaállítani a bőr rugalmasságát és védőrétegét. Gyulladáscsökkentő tulajdonságai révén megnyugtatja az irritált, érzékeny bőrt.</p>
                    </div>

                    <div className="osszetevo">
                        <h6 onClick={(e)=>osszetevo(e.currentTarget)}>Aloe vera</h6>
                        <p>Az aloe vera igazi szuperösszetevő a bőrápolásban: mélyen hidratál, miközben megnyugtatja az irritált, kipirosodott bőrt. Természetes regeneráló hatásának köszönhetően segíti a sejtmegújulást és felgyorsítja a bőr gyógyulási folyamatait. Gazdag vitaminokban, ásványi anyagokban és antioxidánsokban, így erősíti a bőr védekezőképességét is. Könnyű, géles állaga miatt gyorsan felszívódik, nem hagy zsíros érzetet maga után. Kiválóan kiegészíti az anti-aging hatóanyagokat, miközben friss, egészséges megjelenést kölcsönöz a bőrnek.</p>
                    </div>

                    <div className="osszetevo">
                        <h6 onClick={(e)=>osszetevo(e.currentTarget)}>Argánolaj</h6>
                        <p>Rendkívül gazdag E-vitaminban és esszenciális zsírsavakban, így intenzíven hidratálja és táplálja a bőrt. Erős antioxidáns hatása révén segít semlegesíteni a bőröregedést gyorsító szabad gyököket. Rendszeres használatával javul a bőr rugalmassága, finomodnak a ráncok, és üdébb lesz az arcbőr. Könnyű állaga miatt nem nehezíti el a bőrt, így kiváló választás 35 felett is a természetes fiatalosság megőrzésére.</p>
                    </div>

                    <div className="osszetevo">
                        <h6 onClick={(e)=>osszetevo(e.currentTarget)}>Kollagén, MSM</h6>
                        <p>A kollagén és az MSM együttesen gondoskodnak a bőr rugalmasságáról, feszességéről és megújulásáról – különösen 35 felett. A kollagén a bőr természetes tartószerkezete, amely a sima, telt arcbőr alapja, ám az évek múlásával fokozatosan csökken a mennyisége. Külső pótlása segíthet feltölteni a finom ráncokat, javítja a bőr hidratáltságát és feszesebb, élettel telibb bőrképhez vezet. Az MSM – egy szerves kénvegyület – gyulladáscsökkentő hatásával nyugtatja az irritált bőrt, miközben támogatja a kollagén- és elasztintermelést is. Ez a kettős kombináció nemcsak látványosan simább és egészségesebb arcbőrt eredményez, hanem hosszú távon is erősíti a bőr szerkezetét – természetes módon.</p>
                    </div>

                    <div className="osszetevo">
                        <h6 onClick={(e)=>osszetevo(e.currentTarget)}>Hialuronsav</h6>
                        <p>A hialuronsav a bőr egyik legfontosabb természetes hidratáló eleme, amely képes saját súlyának akár ezerszeresét is megkötni vízből. Ezáltal mélyen hidratálja a bőrt, feltölti a sejteket, és segít visszaadni a feszességet és teltséget. Hatékonyan csökkenti a finom ráncokat, miközben simábbá és rugalmasabbá teszi a bőrfelszínt. Mivel könnyedén felszívódik, minden bőrtípus számára ideális, még a legérzékenyebbeknek is. Anti-aging krémekben szinte kötelező hatóanyag – mert a hidratáltság az első lépés a fiatalos megjelenés felé.</p>
                    </div>

                    <div className="osszetevo">
                        <h6 onClick={(e)=>osszetevo(e.currentTarget)}>Kókuszolaj</h6>
                        <p>A kókuszolaj természetes tisztító és tápláló hatású összetevő, amely gyengéden ápolja a bőrt, miközben nem irritálja azt. Gazdag zsírsavtartalma segít megőrizni a bőr puhaságát és rugalmasságát, miközben védelmet nyújt a kiszáradás ellen. Antibakteriális és gyulladáscsökkentő tulajdonságai révén különösen hasznos a problémás, érzékeny bőr számára is. Könnyed textúrája gyorsan felszívódik, és selymes, komfortos érzetet hagy maga után.</p>
                    </div>

                    <div className="osszetevo">
                        <h6 onClick={(e)=>osszetevo(e.currentTarget)}>Vitaminok</h6>
                        <p>A B3-, B5- és C-vitamin hármasa igazi jolly joker a bőrfiatalításban – együtt erősítik, ragyogóbbá és ellenállóbbá teszik az arcbőrt. A B3-vitamin (niacinamid) kiegyenlíti a bőrtónust, csökkenti a pigmentfoltokat, és szabályozza a faggyútermelést, így a kombinált bőrre is tökéletes. A B5-vitamin (panthenol) mélyen hidratál, nyugtatja az irritált bőrt, és támogatja a természetes regenerációs folyamatokat. A C-vitamin erős antioxidáns, amely serkenti a kollagéntermelést, védi a bőrt a környezeti stresszhatásoktól, és üdébb, élettel telibb megjelenést biztosít. Ez a vitamintrió nem csupán táplál, hanem érezhetően javítja a bőr szerkezetét és megjelenését – különösen, ha rendszeresen alkalmazod.</p>
                    </div>

                    <div className="osszetevo">
                        <h6 onClick={(e)=>osszetevo(e.currentTarget)}>Egyéb</h6>
                        <p>Citromsav, természetes hidratáló faktor (NMF) növényi fermentációval, karbamid, Alteromonas Ferment Extract, Hexapeptide, Pentapeptide, Gold</p>
                    </div>

                </div>
            </div>
        </section>

        <section className="hero8">
            <div>
                <div className="text">
                    <h3>Természet védelme kívül-belül</h3>
                    <p>A krém megalkotásakor nemcsak a bőr igényeit, hanem a bolygó jövőjét is szem előtt tartottuk. Olyan összetevőket válogattunk össze, amelyek nemcsak hatékonyak és természetes eredetűek, hanem bőr- és környezetbarát módon kerülnek előállításra. A gyártási folyamat során törekszünk a fenntarthatóságra, a csomagolás pedig minimalista és újrahasznosítható, felesleges műanyag nélkül.</p>
                    <h3>Garancia</h3>
                    <p>A bőrápolás bizalmi kérdés. Túl sok a hangzatos ígéret, és túl sokszor marad el az ígért eredmény. Ha úgy döntesz, hogy esélyt adsz az Egresi Kata Anti-aging arckrémnek, akkor mi is adunk neked egy biztos pontot: Ha bármi okból nem vagy elégedett, jelezd nekünk a vásárlást követő 30 napon belül, és kérdés nélkül visszafizetjük az árát.</p>
                </div>
                <img src="/egresi-kata-cosmetics/hero8.jpg"/>
            </div>
        </section>

        <section className="hero9">
            <div>
                <h3>Vélemények</h3>
                <div className="velemenyek">
                    <div className="velemeny">
                        {/*<img src="/egresi-kata-cosmetics/hero9-1.jpg"/>*/}
                        <img src="/egresi-kata-cosmetics/stars.svg"/>
                        <h4>SÁRA</h4>
                        <p>Féltem az első pár használattól, mert sokszor előfordult már más krémekkel, hogy könnyezett a szemem tőle, vagy pedig csúnya pattanások alakultak ki másnapra az arcom különböző részein. De ezzel a krémmel semmi ilyesmi nem történt!! Az arcom imádja :)) Puha, feszes és kisimult lesz a bőröm tőle.</p>
                    </div>
                    <div className="velemeny">
                        {/*<img src="/egresi-kata-cosmetics/hero9-2.jpg"/>*/}
                        <img src="/egresi-kata-cosmetics/stars.svg"/>
                        <h4>ALEXA</h4>
                        <p>Nagyon elégedett vagyok az arckrémmel. Gyorsan beszívódik, kellemes az illata, és érezhető, hogy délután is puha és hidratált a bőröm. Az arany lapocskák pedig fantasztikusak benne, olyan szép hatása lesz az arcbőrömnek tőle.</p>
                    </div>
                    <div className="velemeny">
                        {/*<img src="/egresi-kata-cosmetics/hero9-3.jpg"/>*/}
                        <img src="/egresi-kata-cosmetics/stars.svg"/>
                        <h4>ENIKŐ</h4>
                        <p>Nagyon kellemes illata és állaga van a krémnek. Nekem nagyon meggyőző volt már az első használatok után is, egy feszes érést és valóban puha és friss arcbőrt eredményez. Ami biztos, hogy egy hét után nem zsírosodik a homlokom. Ez volt az a pont, amikor azt gondoltam, hogy ha másért nem, de már ezért megérte megvenni.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="hero10">
            <div>
                <img src="/egresi-kata-cosmetics/hero10.jpg"/>
                <div className="text">
                    <h3>A megálmodóról</h3>
                    <p>Bevallom, már nem a húszas éveimben járok, de ez egyáltalán nem zavar. Sőt, valójában most érzem igazán, milyen jó nőnek lenni. Az évek tapasztalatot, mélységet és sok-sok önszeretetet hoznak – már ha hajlandóak vagyunk törődni magunkkal.</p>
                    <p>Mindig is szerettem a bőrápolást, de az soha nem volt könnyű dolgom. Ezért álmodtam meg egy olyan krémet, amit végre én is biztonsággal használhatok – és talán te is. Ha a bőröm szó nélkül elfogadta, az már jelent valamit. És ha kipróbálod, bízom benne, hogy te is azt mondod majd: „Na végre, egy krém, ami tényleg nekem való.”</p>
                    <p style={{fontWeight: '700'}}>EGRESI KATA</p>
                </div>
            </div>
        </section>

        <section className="hero11">
            <div>
                <div className="images">
                    <img src="/egresi-kata-cosmetics/hero11-1.jpg"/>
                    <img src="/egresi-kata-cosmetics/hero11-2.jpg"/>
                    <img src="/egresi-kata-cosmetics/hero11-3.jpg"/>
                    <img src="/egresi-kata-cosmetics/hero11-4.jpg"/>
                </div>

                <div className="text">
                    <h4>Egresi Kata Cosmetics</h4>
                    <h3>Anti-aging arckrém</h3>
                    <div className="qty">
                        <button type="button" id="320" className="active">1 db / <del>8 990 Ft</del> 7 190 Ft</button>
                        <button type="button" id="321">2 db / <del>17 980 Ft</del> 13 490 Ft</button>
                        <button type="button" id="322">3 db / <del>26 970 Ft</del> 18 890 Ft</button>
                    </div>

                    <p style={{marginTop: '20px'}}>*Ingyenes belföldi szállítás</p>

                    <div id="theForm">
                        <input type="text" name="name" id="name" placeholder="NÉV" required/>
                        <input type="text" name="email" id="email" placeholder="E-MAIL" required/>
                        <input type="text" name="phone" id="phone" placeholder="TELEFON" required/>
                        <label style={{display: 'block', margin: '20px 0 10px', fontWeight: '600'}}>Számlázási cím</label>
                        <div className="iranyitoszam">
                            <input type="text" name="billing_zip" id="billing_zip" placeholder="ÍRÁNYÍTÓSZÁM" required/>
                        </div>
                        <div className="varos">
                            <input type="text" name="billing_city" id="billing_city" placeholder="VÁROS" required/>
                        </div>
                        <input type="text" name="billing_address" id="billing_address" placeholder="CÍM" required/>

                        <input type="checkbox" id="shippingCheck" onClick={shippingCheck}/>
                        <label>Másik címre kérem a szállítást</label>

                        <div id="shippingInputs" style={{display: 'none', marginTop: '20px'}}>
                            <label style={{display: 'block', margin: '20px 0 10px', fontWeight: '600'}}>Szállítási cím</label>

                            <div className="iranyitoszam">
                                <input type="text" name="shipping_zip" id="shipping_zip" placeholder="ÍRÁNYÍTÓSZÁM" />
                            </div>
                            <div className="varos">
                                <input type="text" name="shipping_city" id="shipping_city" placeholder="VÁROS" />
                            </div>
                            <input type="text" name="shipping_address" id="shipping_address" placeholder="CÍM" />
                        </div>
                        <div>
                            <input type="text" name="message" id="message" placeholder="MEGJEGYZÉS" />
                        </div>
                        <div className="radio-label">
                            <label>
                                <input type="radio" name="radio-payment" value="1" data-price="0" />
                                <span>Utánvétel</span>
                            </label>
                            <label>
                                <input type="radio" name="radio-payment" value="2" />
                                <span>Banki átutalás</span>
                            </label>
                            {/*<label>
                                <input type="radio" name="radio-payment" value="3" />
                                <span>Bankkártya</span>
                            </label>*/}
                        </div>

                        <iframe frameBorder={0} loading="lazy" src="https://cdn.foxpost.hu/apt-finder/v1/app/" width="100%" height="600px" id="foxpost" style={{display:'none'}}></iframe>
                        <input type="hidden" name="data[fp_automata]" id="foxpostData"/>


                            <p style={{fontSize: '12px', marginBottom: '20px'}}>A megrendelés elküldésével elfogadom az <a href="/egresi-kata-cosmetics/aszf.pdf" target="_blank">ÁSZF</a> és az <a href="/egresi-kata-cosmetics/adatvedelmi.pdf" target="_blank">Adatkezelési tájékoztatóban</a> foglaltakat.</p>
                            <button id="orderBTN" className="rendeles-gomb" type="button" onClick={postData}>Megrendelés elküldése</button>
                            <div id="success-order">
                                <h4>Sikeres rendelés!</h4>
                                <button className="rendeles-gomb" type="button" onClick={() => location.reload()}>Új rendelés leadása</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}
