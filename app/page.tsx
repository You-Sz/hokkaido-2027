const days = [
  { date:"01.01", weekday:"FRI", city:"札幌", title:"抵達雪國，迎接新年的第一夜", tone:"blue", stops:[
    ["09:15","台灣起飛","前往新千歲機場；日本時間快台灣 1 小時。"],
    ["14:05","抵達新千歲機場","預留 75–90 分鐘入境、領行李及購買交通票券。"],
    ["15:30","前往札幌","力求 15:30 前離開機場；搭 JR 快速 Airport，再轉地下鐵前往薄野。"],
    ["16:40","Vessel Hotel 寄放行李","先寄放行李、不停留整理，立刻搭地下鐵前往圓山公園。"],
    ["17:20","北海道神宮初詣","元旦近年約 18:00 關門，抵達後先參拜再領御守；若航班延誤則順延至 1/2。"],
    ["18:40","薄野晚餐","參拜後返回薄野吃晚餐；想吃拉麵可安排麵屋雪風。"],
    ["20:00","回飯店休息","辦理入住、整理行李，第一晚不再安排逛街。"]]},
  { date:"01.02", weekday:"SAT", city:"札幌", title:"圓山晨景與札幌初賣", tone:"ice", stops:[
    ["08:00","北海道神宮・圓山散策","一早回到北海道神宮周邊慢慢逛；若元旦參拜匆忙，可補領御守、拍雪景。"],
    ["10:00","圓山咖啡・早午餐","在圓山一帶找咖啡廳休息，再搭地下鐵前往大通。"],
    ["11:30","大通公園・札幌時計台","欣賞雪景並看時計台外觀；室內展示留到 1/8。"],
    ["12:45","札幌電視塔","中午前後登塔俯瞰大通，再步行前往百貨商圈。"],
    ["14:00","百貨商圈・初賣","提早開始逛丸井今井、三越與地下街；實際年始營業時間年底再確認。"],
    ["17:30","狸小路商店街","從大通一路往薄野逛狸小路，晚餐後步行回飯店。"]]},
  { date:"01.03", weekday:"SUN", city:"美瑛・富良野", title:"一日遊團的純白風景", tone:"snow", stops:[
    ["07:15","集合報到","以旅行團通知為準，建議提早 15 分鐘抵達。"],
    ["10:30","美瑛聖誕樹","郊外拍照停留；時間依雪況與交通調整。"],
    ["11:30","白鬚瀑布","冬季藍色瀑布與雪景。"],
    ["13:30","四季彩之丘","午餐與雪上摩托車；確認活動是否含在團費內。"],
    ["16:30","森林精靈露台","等待點燈，逛森林木屋。"],
    ["20:00","返回札幌","薄野簡單晚餐，提早休息。"]]},
  { date:"01.04", weekday:"MON", city:"小樽", title:"沿著堺町走向運河暮色", tone:"blue", stops:[
    ["08:00","札幌站出發","搭 JR 前往南小樽站，避開逆向折返。"],
    ["09:10","住吉神社","雪中參拜；09:35 左右離開，階梯濕滑要慢走。"],
    ["10:00","蒸汽鐘整點表演","建議 09:50 前抵達，先看整點表演，再逛音樂盒堂。"],
    ["11:30","北菓樓・Un délice","甜點採買與布丁大福。"],
    ["12:30","堺町午餐","壽司、海鮮丼或洋食。"],
    ["14:00","彩繪玻璃美術館","參觀小樽藝術村；年始營業需再確認。"],
    ["16:10","小樽運河","等待藍調時刻與點燈。"],
    ["18:00","返回札幌","由小樽站搭 JR 回札幌。"]]},
  { date:"01.05", weekday:"TUE", city:"洞爺湖", title:"火山、湖景與一泊二食", tone:"ice", stops:[
    ["07:30","札幌退房","早餐後前往札幌站。"],
    ["08:43","特急北斗","建議訂早班指定席；車次以正式班表為準。"],
    ["10:35","抵達洞爺站","轉巴士或預約接送到飯店寄放行李。"],
    ["12:00","昭和新山","午餐、火山地景；以預約計程車或包車移動。"],
    ["13:30","有珠山纜車","登上展望台；強風停駛時改湖畔行程。"],
    ["15:30","洞爺湖畔","回飯店入住、散步與泡湯。"],
    ["18:00","一泊二食","享用飯店晚餐，晚上留白休息。"]]},
  { date:"01.06", weekday:"WED", city:"函館", title:"坡道盡頭，等待百萬夜景", tone:"snow", stops:[
    ["08:00","飯店早餐","退房後搭接駁前往洞爺站。"],
    ["09:40","特急北斗","洞爺 → 函館；實際車次需配合飯店接駁。"],
    ["11:50","抵達函館","Tokyu Stay 寄放行李，附近午餐。"],
    ["13:20","金森紅磚倉庫","沿港區慢慢往元町方向前進。"],
    ["14:30","元町・八幡坂","教會群、坡道與港景。"],
    ["15:30","函館山","日落前上山卡位；冬季先確認纜車運行。"],
    ["18:30","函館晚餐","大門橫丁、鹽味拉麵或海鮮料理。"]]},
  { date:"01.07", weekday:"THU", city:"函館 → 札幌", title:"朝市與星形城郭", tone:"blue", stops:[
    ["07:00","函館朝市","飯店就在朝市旁，吃海鮮早餐最順。"],
    ["08:30","退房・寄放行李","搭市電前往五稜郭公園前。"],
    ["09:30","五稜郭塔","俯瞰雪中的星形城郭。"],
    ["11:30","幸運小丑・咖啡廳","漢堡或函館鹽味拉麵擇一，保留悠閒時間。"],
    ["13:30","回函館站取行李","購買車上飲料與點心。"],
    ["14:30","特急北斗回札幌","預留約 3.5–4 小時；時間依正式班表調整。"],
    ["18:30","Keio Prelia 入住","放好行李、稍作休息；當晚不再硬排藻岩山。"],
    ["19:30","狸小路商店街（可選）","體力足夠就搭地下鐵前往狸小路吃晚餐、補逛；累了則留在札幌站用餐。"]]},
  { date:"01.08", weekday:"FRI", city:"札幌", title:"校園、甜點與啤酒香", tone:"ice", stops:[
    ["09:00","北海道大學","從飯店步行進校園看雪景。"],
    ["10:00","北大マルシェ Café & Labo","到百年紀念會館品嘗北大牛奶、自製起司餐點或義式冰淇淋。"],
    ["11:30","六花亭札幌本店","甜點、伴手禮與短暫休息。"],
    ["12:30","雪印パーラー","經典冰淇淋；前一站吃得較多時可只外帶。"],
    ["13:30","札幌時計台","補看 1/2 無法進入的室內展示。"],
    ["15:00","札幌啤酒博物館","參觀與試飲，結束後步行前往同園區餐廳。"],
    ["17:00","サッポロビール園・開拓使館","預約成吉思汗羊肉食べ放題晚餐；餐廳在博物館旁的同一園區。"]]},
  { date:"01.09", weekday:"SAT", city:"支笏湖", title:"最後一片寧靜湖藍", tone:"snow", stops:[
    ["08:00","札幌出發","優先參加札幌出發一日團；以下時間依團程微調。"],
    ["10:00","支笏湖畔","湖景散步、遊客中心與雪景。"],
    ["12:00","湖畔午餐","找室內餐廳取暖。"],
    ["13:30","自由散策","1 月上旬通常尚未進入冰濤祭。"],
    ["16:30","返回札幌","若無合適交通，整天改白色戀人公園與市區。"],
    ["17:30","藻岩山夜景備案","只有函館山夜景沒看到、且支笏湖準時回程時才執行；冬季纜車近年營業至 22:00。"],
    ["20:00","狸小路商店街・最後購物","需要藻岩山時下山後逛狸小路；不去藻岩山則 18:00 起先逛大丸、Stellar Place 與地下街。"]]},
  { date:"01.10", weekday:"SUN", city:"返程", title:"把雪景裝進行李", tone:"blue", stops:[
    ["08:30","札幌早餐","飯店附近用餐、整理最後行李。"],
    ["10:30","飯店退房","步行前往札幌站。"],
    ["11:00","前往新千歲機場","冬季預留列車延誤緩衝。"],
    ["12:00","機場午餐・採買","辦理登機前完成最後購物。"],
    ["13:20","航空公司報到","國際線至少提前 2 小時。"],
    ["15:20","札幌起飛","返回台灣。"]]}
];

const hotels = [
  ["01.01—05","Vessel Hotel Campana Susukino","札幌・4 晚"],
  ["01.05—06","洞爺湖 湖之栖","洞爺湖・1 晚"],
  ["01.06—07","Tokyu Stay Hakodate Asaichi","函館・1 晚"],
  ["01.07—10","Keio Prelia Hotel Sapporo","札幌・3 晚"]
];

export default function Home(){return <main>
  <header className="hero" id="top">
    <nav className="nav shell"><a className="brand" href="#top">北國十日</a><div className="navlinks"><a href="#overview">概覽</a><a href="#itinerary">行程</a><a href="#notes">Notes</a></div></nav>
    <div className="heroInner shell"><div className="heroCopy"><p className="eyebrow">HOKKAIDO · WINTER 2027</p><h1>北海道<br/>雪路旅誌</h1><p className="lead">札幌、小樽、美瑛、洞爺湖與函館。每一站都有時間，每一天都留有風雪所需的餘白。</p><a className="primaryButton" href="#itinerary">查看十日行程 <span>↓</span></a></div>
    <div className="heroCard"><div className="stamp"><span>JAN</span><strong>01—10</strong><small>10 DAYS · 9 NIGHTS</small></div><div className="routeLine"><b>CTS</b><i></i><b>SPK</b><i></i><b>OTR</b><i></i><b>TOYA</b><i></i><b>HKD</b></div><div className="hotelBrief">{hotels.map(h=><p key={h[0]}><span>{h[0]}</span>{h[1]}</p>)}</div></div></div>
  </header>

  <section className="overview shell" id="overview"><div className="sectionHeading"><p>TRIP AT A GLANCE</p><h2>十日路線，一眼掌握</h2></div><div className="overviewGrid"><article><span>去程</span><strong>01.01 · 09:15</strong><small>台灣 → 新千歲 14:05</small></article><article><span>移動核心</span><strong>JR 特急北斗</strong><small>札幌 → 洞爺 → 函館 → 札幌</small></article><article><span>回程</span><strong>01.10 · 15:20</strong><small>新千歲 → 台灣</small></article></div>
  <div className="quickNav">{days.map((d,i)=><a href={`#day-${i+1}`} key={d.date}><strong>{d.date}</strong><span>{d.city}</span></a>)}</div></section>

  <section className="itinerary shell" id="itinerary">{days.map((d,i)=><article className={`day day-${d.tone}`} id={`day-${i+1}`} key={d.date}><div className="dayDate"><span>DAY {String(i+1).padStart(2,"0")}</span><strong>{d.date}</strong><em>{d.weekday}</em></div><div className="dayContent"><div className="dayTitle"><p>{d.city}</p><h2>{d.title}</h2></div><ol className="timeline">{d.stops.map(s=><li key={`${d.date}-${s[0]}-${s[1]}`}><time>{s[0]}</time><div><h3>{s[1]}</h3><p>{s[2]}</p></div></li>)}</ol></div></article>)}</section>

  <section className="notes" id="notes"><div className="shell"><div className="sectionHeading light"><p>NOTES BEFORE DEPARTURE</p><h2>出發前最後確認</h2></div><div className="notesGrid"><article><b>01</b><h3>元旦北海道神宮</h3><p>元旦近年約 18:00 關門，這個安排非常吃入境速度。若 16:40 還沒抵達飯店，1/1 直接改市區晚餐與休息；1/2 早上仍會前往北海道神宮與圓山一帶。</p></article><article><b>02</b><h3>年始營業</h3><p>小樽藝術村、北大 Marche、時計台、百貨公司與餐廳的 2027 年始時間，請於 2026 年 11–12 月再確認。</p></article><article><b>03</b><h3>洞爺交通</h3><p>洞爺站、溫泉街與有珠山並非步行範圍。先確認飯店接駁，再預約計程車或包車前往昭和新山。</p></article><article><b>04</b><h3>風雪備案</h3><p>函館山與有珠山纜車可能因強風停駛；1/8 晚餐已固定在啤酒園，藻岩山夜景備案改放 1/9 晚上。</p></article><article><b>05</b><h3>指定席・餐廳</h3><p>特急北斗建議提早預約指定席；啤酒園訂位請選「開拓使館」及羊肉食べ放題，不必指定館內大廳。</p></article><article><b>06</b><h3>時間性質</h3><p>頁面中的時間是順路規劃值，JR、巴士、飯店接駁與旅行團時間須以正式預約資料覆蓋。</p></article></div></div></section>
  <footer><div className="shell"><strong>北國十日</strong><p>HOKKAIDO WINTER JOURNAL · 2027</p><a href="#top">回到頁首 ↑</a></div></footer>
  </main>}
