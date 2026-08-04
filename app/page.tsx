const days = [
  { date:"01.01", weekday:"FRI", city:"札幌", title:"抵達雪國，迎接新年的第一夜", tone:"blue", stops:[
    ["09:15","台灣起飛","前往新千歲機場；日本時間快台灣 1 小時。"],
    ["14:05","抵達新千歲機場","預留 75–90 分鐘入境、領行李及購買交通票券。"],
    ["15:30","前往札幌","力求 15:30 前離開機場；搭 JR 快速 Airport，再轉地下鐵前往薄野。"],
    ["16:40","Vessel Hotel 寄放行李","先寄放行李、不停留整理，立刻搭地下鐵前往圓山公園。"],
    ["17:20","北海道神宮初詣","元旦近年約 18:00 關門，抵達後先參拜再領御守；若航班延誤則順延至 1/2。"],
    ["18:40","薄野晚餐","參拜後返回薄野吃晚餐；想吃拉麵可安排麵屋雪風。"],
    ["20:00","回飯店休息","辦理入住、整理行李，第一晚不再安排逛街。"]]},
  { date:"01.02", weekday:"SAT", city:"札幌", title:"圓山晨景、海鮮與札幌初賣", tone:"ice", stops:[
    ["08:00","北海道神宮・圓山散策","一早回到北海道神宮周邊慢慢逛；若元旦參拜匆忙，可補領御守、拍雪景。"],
    ["09:15","六花亭 神宮茶屋店","在境內吃現烤限定甜點「判官さま」；2027 年正月營業時間需再確認。"],
    ["10:00","森彥 MORIHICO. 本店","步行到南 2 條西 26 丁目的老屋咖啡館，悠閒吃早午餐。"],
    ["12:00","二條市場・海鮮午餐","搭地下鐵前往二條市場，海鮮丼或烤海鮮少量品嘗；各店年始營業不同。"],
    ["13:20","札幌時計台・大通公園","看時計台外觀並沿大通公園散步；室內展示留到 1/8。"],
    ["13:50","札幌電視塔","登塔俯瞰大通，悠閒看完景色後步行前往百貨商圈。"],
    ["15:00","百貨商圈・初賣","逛丸井今井、三越與地下街；實際年始營業時間年底再確認。"],
    ["18:00","狸小路商店街","從大通一路往薄野逛狸小路，晚餐後步行回飯店。"]]},
  { date:"01.03", weekday:"SUN", city:"美瑛・富良野", title:"一日遊團的純白風景", tone:"snow", stops:[
    ["07:15","集合報到","以旅行團通知為準，建議提早 15 分鐘抵達。"],
    ["10:30","美瑛聖誕樹","郊外拍照停留；時間依雪況與交通調整。"],
    ["11:30","白鬚瀑布","冬季藍色瀑布與雪景。"],
    ["13:30","四季彩之丘","午餐與雪上摩托車；確認活動是否含在團費內。"],
    ["16:30","森林精靈露台","等待點燈，逛森林木屋。"],
    ["20:00","返回札幌","薄野簡單晚餐，提早休息。"]]},
  { date:"01.04", weekday:"MON", city:"小樽", title:"沿著堺町走向運河暮色", tone:"blue", stops:[
    ["08:00","札幌站出發","搭 JR 前往南小樽站；抵達後先走往住吉神社。"],
    ["09:10","住吉神社","雪中參拜；階梯濕滑要慢走，09:35 左右離開。"],
    ["10:00","Un délice 住ノ江創業本店","開門時購買布丁大福；目前 10:00 營業，年始時間仍需再次確認。"],
    ["11:00","蒸汽鐘整點表演","約 10:50 抵達鐘前等候，觀看整點蒸汽表演。"],
    ["11:10","小樽音樂盒堂本館","從蒸汽鐘旁進入本館參觀與選購。"],
    ["11:45","北菓樓小樽本館","沿堺町通往北散步，購買泡芙與伴手禮。"],
    ["12:30","宝すし（Takara Sushi）","前往花園 1 丁目享用壽司午餐；午間僅營業至 14:00，務必事先訂位。"],
    ["14:15","吉伊卡哇 MOGUMOGU 本舖小樽店","回到堺町 6-1 購買小樽限定商品；目前須透過官方 LINE 事前預約入店。"],
    ["15:20","彩繪玻璃美術館","參觀小樽藝術村；2027 年始營業需再確認。"],
    ["16:30","小樽運河","等待藍調時刻與點燈。"],
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
    ["10:00","北海道大學綜合博物館","參觀校史、自然科學與研究標本展示；目前免費入館、17:00 閉館。"],
    ["11:45","北大マルシェ Café & Labo","到百年紀念會館品嘗北大牛奶、自製起司餐點或義式冰淇淋。"],
    ["13:00","六花亭札幌本店","甜點、伴手禮與短暫休息。"],
    ["14:00","雪印パーラー","經典冰淇淋；前一站吃得較多時可只外帶。"],
    ["14:45","札幌時計台","補看 1/2 無法進入的室內展示。"],
    ["16:00","札幌啤酒博物館","參觀啤酒歷史展示並試飲；結束後返回札幌市區。"],
    ["18:30","成吉思汗烤肉晚餐","不在札幌啤酒園用餐，改選札幌站、薄野或狸小路附近的成吉思汗烤肉店。"]]},
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

const reservations = [
  ["01.03","美瑛・富良野一日遊團","確認集合地點、雪上摩托車是否含在團費，以及取消規則。"],
  ["01.04","宝すし（Takara Sushi）午餐","預約 12:30 午餐；店家午間僅營業至 14:00。"],
  ["01.04","吉伊卡哇 MOGUMOGU 本舖","目前須透過官方 LINE 參加入店預約或抽選，出發前再確認規則。"],
  ["01.05—07","特急北斗指定席","預訂札幌→洞爺、洞爺→函館、函館→札幌三段座位。"],
  ["01.05","洞爺湖接駁與計程車","先向湖之栖確認接駁，再預約昭和新山、有珠山一帶的移動方式。"],
  ["01.08","成吉思汗烤肉晚餐","選定札幌站、狸小路或薄野附近餐廳後，預約 18:30。"],
  ["01.09","支笏湖一日遊團","優先預訂札幌出發團；若沒有合適團次，啟用市區備案。"]
];

const backups = [
  ["札幌諏訪神社","若北海道神宮周邊提早逛完，或想增加另一處新年參拜，可安排早上前往；以冬季花手水與雪景為主。"],
  ["藻岩山觀景台","函館山夜景沒看到時，放在 1/9 支笏湖準時回程後；出發前確認纜車與迷你纜車是否運行。"],
  ["白色戀人公園・札幌市區","1/9 找不到合適的支笏湖交通，或遇到大雪停駛時，整日改為此方案與最後購物。"],
  ["洞爺湖畔散策","有珠山纜車因強風停駛時，改走湖畔、溫泉街與室內咖啡行程。"]
];

export default function Home(){return <main>
  <header className="hero" id="top">
    <nav className="nav shell"><a className="brand" href="#top">北國十日</a><div className="navlinks"><a href="#overview">概覽</a><a href="#itinerary">行程</a><a href="#checklists">清單</a><a href="#notes">Notes</a></div></nav>
    <div className="heroInner shell"><div className="heroCopy"><p className="eyebrow">HOKKAIDO · WINTER 2027</p><h1>北海道<br/>雪路旅誌</h1><p className="lead">札幌、小樽、美瑛、洞爺湖與函館。每一站都有時間，每一天都留有風雪所需的餘白。</p><a className="primaryButton" href="#itinerary">查看十日行程 <span>↓</span></a></div>
    <div className="heroCard"><div className="stamp"><span>JAN</span><strong>01—10</strong><small>10 DAYS · 9 NIGHTS</small></div><div className="routeLine"><b>CTS</b><i></i><b>SPK</b><i></i><b>OTR</b><i></i><b>TOYA</b><i></i><b>HKD</b></div><div className="hotelBrief">{hotels.map(h=><p key={h[0]}><span>{h[0]}</span>{h[1]}</p>)}</div></div></div>
  </header>

  <section className="overview shell" id="overview"><div className="sectionHeading"><p>TRIP AT A GLANCE</p><h2>十日路線，一眼掌握</h2></div><div className="overviewGrid"><article><span>去程</span><strong>01.01 · 09:15</strong><small>台灣 → 新千歲 14:05</small></article><article><span>移動核心</span><strong>JR 特急北斗</strong><small>札幌 → 洞爺 → 函館 → 札幌</small></article><article><span>回程</span><strong>01.10 · 15:20</strong><small>新千歲 → 台灣</small></article></div>
  <div className="quickNav">{days.map((d,i)=><a href={`#day-${i+1}`} key={d.date}><strong>{d.date}</strong><span>{d.city}</span></a>)}</div></section>

  <section className="itinerary shell" id="itinerary">{days.map((d,i)=><article className={`day day-${d.tone}`} id={`day-${i+1}`} key={d.date}><div className="dayDate"><span>DAY {String(i+1).padStart(2,"0")}</span><strong>{d.date}</strong><em>{d.weekday}</em></div><div className="dayContent"><div className="dayTitle"><p>{d.city}</p><h2>{d.title}</h2></div><ol className="timeline">{d.stops.map(s=><li key={`${d.date}-${s[0]}-${s[1]}`}><time>{s[0]}</time><div><h3>{s[1]}</h3><p>{s[2]}</p></div></li>)}</ol></div></article>)}</section>

  <section className="checklists shell" id="checklists"><div className="sectionHeading"><p>BOOK &amp; PLAN B</p><h2>預約與備案清單</h2></div><div className="listColumns"><article className="listPanel bookingList"><div className="listPanelTitle"><span>RESERVATIONS</span><h3>要預定的</h3></div><ol>{reservations.map((item,i)=><li key={item[1]}><b>{String(i+1).padStart(2,"0")}</b><div><time>{item[0]}</time><h4>{item[1]}</h4><p>{item[2]}</p></div></li>)}</ol></article><article className="listPanel backupList"><div className="listPanelTitle"><span>ALTERNATIVES</span><h3>備案</h3></div><ol>{backups.map((item,i)=><li key={item[0]}><b>{String(i+1).padStart(2,"0")}</b><div><h4>{item[0]}</h4><p>{item[1]}</p></div></li>)}</ol></article></div></section>

  <section className="notes" id="notes"><div className="shell"><div className="sectionHeading light"><p>NOTES BEFORE DEPARTURE</p><h2>出發前最後確認</h2></div><div className="notesGrid"><article><b>01</b><h3>元旦北海道神宮</h3><p>元旦近年約 18:00 關門，這個安排非常吃入境速度。若 16:40 還沒抵達飯店，1/1 直接改市區晚餐與休息；1/2 早上仍會前往北海道神宮與圓山一帶。</p></article><article><b>02</b><h3>年始營業</h3><p>小樽藝術村、北大 Marche、時計台、百貨公司與餐廳的 2027 年始時間，請於 2026 年 11–12 月再確認。</p></article><article><b>03</b><h3>洞爺交通</h3><p>洞爺站、溫泉街與有珠山並非步行範圍。先確認飯店接駁，再預約計程車或包車前往昭和新山。</p></article><article><b>04</b><h3>風雪備案</h3><p>函館山與有珠山纜車可能因強風停駛；藻岩山夜景備案放在 1/9 晚上，僅於函館夜景未看到且支笏湖準時回程時執行。</p></article><article><b>05</b><h3>指定席・餐廳</h3><p>特急北斗建議提早預約指定席；1/8 的成吉思汗烤肉店待選定後也建議事先訂位。</p></article><article><b>06</b><h3>時間性質</h3><p>頁面中的時間是順路規劃值，JR、巴士、飯店接駁與旅行團時間須以正式預約資料覆蓋。</p></article></div></div></section>
  <footer><div className="shell"><strong>北國十日</strong><p>HOKKAIDO WINTER JOURNAL · 2027</p><a href="#top">回到頁首 ↑</a></div></footer>
  </main>}
