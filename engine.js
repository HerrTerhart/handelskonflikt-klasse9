/* Gemeinsame Fachinhalte und zustandsunabhängige Regeln. Keine Netzwerkzugriffe. */
(function (root) {
  'use strict';
  const roles = {
    beard: {
      title: 'Geschäftsführung Beard', country: 'B-Land', icon: 'factory',
      introduction: 'Ihr leitet den Autohersteller Beard. Im Ausgangsfall verkauft ihr 100.000 Autos, obwohl ihr 200.000 verkaufen wolltet. Avanti ist bei den Kunden beliebter, obwohl beide Autos vor dem Zoll ungefähr gleich teuer sind. Beard macht Verluste und reagiert bereits mit Entlassungen.',
      interests: 'Ihr wollt mehr Autos verkaufen, eure wirtschaftliche Zukunft sichern und weiteren Beschäftigungsabbau vermeiden.',
      fact: '70.000 eurer Autos bleiben in B-Land. 30.000 verkauft ihr nach A-Land. Auch euer Unternehmen lebt also vom Handel über die Grenze.',
      opportunity: 'Ein Zoll könnte Avanti in B-Land verteuern. Manche Käufer könnten dann eher Beard wählen. Sie müssen sich aber nicht so entscheiden.',
      risk: 'Reagiert A-Land mit eigenen Handelsbeschränkungen, könnten eure Exporte leiden. Der Schutz zu Hause kann mit Nachteilen im Ausland verbunden sein.',
      question: 'Unter welcher Bedingung könnte der Zoll euch helfen – und warum könnte eure Forderung trotzdem riskant sein?'
    },
    avanti: {
      title: 'Geschäftsführung Avanti', country: 'A-Land', icon: 'car',
      introduction: 'Ihr leitet Avanti. Im Ausgangsfall verkauft ihr 200.000 Autos. Die Hälfte davon, also 100.000 Autos, geht nach B-Land. Dort ist Avanti bei den Kunden beliebt. Vor dem Zoll kosten Avanti und Beard ungefähr gleich viel.',
      interests: 'Ihr wollt den Zugang zum Markt in B-Land behalten, Fahrzeuge verkaufen und wettbewerbsfähig bleiben.',
      fact: 'B-Land nimmt die Hälfte eurer Verkäufe ab. Veränderungen an dieser Grenze können euch deshalb besonders stark betreffen.',
      opportunity: 'Ohne zusätzlichen Zoll können die Kunden in B-Land eure Autos weiterhin zu den bisherigen Handelsbedingungen kaufen.',
      risk: 'Ein Zoll ist eine zusätzliche Belastung beim Import. Wird sie an Käufer weitergegeben, könnte eure Nachfrage sinken. Übernehmt ihr einen Teil der Kosten, könnte weniger Gewinn pro Auto bleiben. Beides ist möglich, keines sicher.',
      question: 'Was könntet ihr von eurer Regierung verlangen – und welche Reaktion könnte auch eurem Unternehmen schaden?'
    },
    consumers: {
      title: 'Verbraucherinnen', country: 'B-Land', icon: 'people',
      introduction: 'Ihr lebt in B-Land und interessiert euch für ein Auto. Ihr vergleicht Preis, Qualität und passende Ausstattung. Manche von euch oder euren Angehörigen könnten zugleich von Arbeitsplätzen in der heimischen Autoindustrie abhängig sein. Das ist eine mögliche Rollenannahme, keine zusätzliche Buchangabe.',
      interests: 'Ihr wollt bezahlbare, gute Autos und Auswahl. Gleichzeitig können euch sichere Einkommen und Arbeitsplätze wichtig sein.',
      fact: 'In B-Land werden im Ausgangsfall 100.000 Avanti-Autos und 70.000 Beard-Autos verkauft. Avanti ist bei den Kunden beliebter, vor dem Zoll aber nicht teurer.',
      opportunity: 'Offener Handel erhält die Auswahl. Ein Zoll könnte dagegen Beard entlasten und damit möglicherweise Arbeitsplätze schützen.',
      risk: 'Importautos könnten teurer werden. Weniger Konkurrenz könnte auch den Preisdruck auf Beard verringern. Geschützte Arbeitsplätze sind dabei nicht garantiert.',
      question: 'Wie wägt ihr günstige Preise und Wahlmöglichkeiten gegen die mögliche Sicherung heimischer Arbeitsplätze ab?'
    },
    governmentB: {
      title: 'Regierung B-Land', country: 'B-Land', icon: 'government',
      introduction: 'Ihr regiert B-Land. Beard macht Verluste und entlässt Beschäftigte. Das Unternehmen fordert Schutz vor Avanti. Gleichzeitig kaufen viele Menschen in B-Land Avanti-Autos. Ihr müsst mehrere Interessen berücksichtigen und die erste gemeinsame Entscheidung treffen.',
      interests: 'Ihr wollt heimische Wirtschaft und Beschäftigung fördern, Verbraucherinteressen beachten und verlässliche Handelsbeziehungen erhalten.',
      fact: 'Beard exportiert selbst 30.000 Autos nach A-Land. Eure Entscheidung kann deshalb eine Gegenreaktion auslösen, die auch Beard betrifft.',
      opportunity: 'Ein Zoll von rund 35 % könnte den Wettbewerb zugunsten Beards verändern. Solange besteuerte Autos eingeführt werden, entstehen Zolleinnahmen. Deren Höhe ist hier nicht berechenbar.',
      risk: 'Käufer könnten stärker belastet werden. A-Land könnte reagieren. Ohne Zoll bleibt dagegen der Wettbewerbsdruck auf Beard bestehen.',
      question: 'Welche Interessen gewichtet ihr besonders – und welches Risiko müsst ihr bei eurer Entscheidung akzeptieren?'
    },
    governmentA: {
      title: 'Regierung A-Land', country: 'A-Land', icon: 'government',
      introduction: 'Ihr regiert A-Land. Avanti verkauft die Hälfte seiner 200.000 Autos nach B-Land. Schon vor dessen Entscheidung bereitet ihr eine Empfehlung vor: Wie sollte A-Land auf einen möglichen Zoll reagieren? Später hört ihr die Entscheidung B-Lands und legt die gemeinsame Reaktion fest.',
      interests: 'Ihr wollt die eigenen Exporte und wirtschaftliche Chancen schützen, faire Wettbewerbsbedingungen fördern und weitere Nachteile eines Handelskonflikts vermeiden.',
      fact: 'Auch euer Land kauft Autos aus B-Land: 30.000 Beard-Autos im Ausgangsfall. Gegenmaßnahmen würden daher andere Anbieter und Käufer ebenfalls betreffen.',
      opportunity: 'Verhandlungen könnten eine Lösung ermöglichen. Eigene Handelsbeschränkungen könnten politischen Druck auf B-Land ausüben.',
      risk: 'Druck garantiert kein Einlenken. Neue Handelsbeschränkungen könnten Käufer in A-Land belasten und den Konflikt verschärfen. Auch Gespräche haben keinen sicheren Ausgang.',
      question: 'Welche Reaktion würdet ihr vorbereiten, falls B-Land den Zoll einführt – und was spricht gegen diese Reaktion?'
    }
  };
  const definitions = [
    ['Freihandel', 'Handel zwischen Ländern, bei dem staatliche Handelshemmnisse wie Einfuhrzölle möglichst abgebaut sind.'],
    ['Protektionismus', 'Staatliche Maßnahmen, mit denen die eigene Wirtschaft vor ausländischer Konkurrenz geschützt werden soll.'],
    ['Einfuhrzoll', 'Eine Abgabe auf Waren, die aus einem anderen Land eingeführt werden. Sie kann Importwaren verteuern und dadurch heimische Anbieter schützen.']
  ];
  const bLabels = {open: 'Kein zusätzlicher Einfuhrzoll', tariff: '35 % Einfuhrzoll auf Autos aus A-Land'};
  function aOptions(b) {
    if (b === 'tariff') return [
      {id:'negotiate', title:'Verhandlungen anbieten', text:'A-Land bietet Gespräche über den Zoll und die Interessen beider Länder an.'},
      {id:'counter', title:'Eigene Handelsbeschränkungen', text:'A-Land erschwert als Gegenmaßnahme ebenfalls die Einfuhr von Beard-Autos. Art und Höhe bleiben im Modell offen.'}
    ];
    if (b === 'open') return [
      {id:'talk', title:'Gespräche über Wettbewerb anbieten', text:'A-Land bietet Gespräche über faire Wettbewerbsbedingungen an. Es erhebt keinen neuen Zoll.'},
      {id:'continue', title:'Keine neue Handelsschranke', text:'A-Land setzt den Handel zu den bisherigen Bedingungen fort. Es führt in dieser Runde keine neue Beschränkung ein.'}
    ];
    return [];
  }
  function outcomes(b) {
    if (b === 'tariff') return {
      mechanism:'B-Land erhebt beim Import von Avanti-Autos eine Abgabe von 35 % des maßgeblichen Warenwerts. Wie viel davon beim Endpreis ankommt, hängt davon ab, wer die Kosten trägt und wie Unternehmen ihre Preise verändern.',
      actors:[
        ['Beard', 'Avanti könnte teurer werden. Manche Käufer könnten stattdessen Beard wählen. Zusätzliche Verkäufe und sichere Arbeitsplätze sind aber nicht garantiert.'],
        ['Avanti', 'Der Import wird belastet. Avanti könnte Kunden verlieren oder einen Teil der Kosten selbst übernehmen. Die tatsächliche Reaktion ist offen.'],
        ['Verbraucherinnen in B-Land', 'Importautos könnten teurer werden. Der Zoll kann die Auswahl wirtschaftlich einschränken. Einige Familien könnten zugleich von einer Entlastung Beards profitieren.'],
        ['Regierungen', 'B-Land erhält Einnahmen, solange besteuerte Autos importiert werden. A-Land könnte reagieren. Umfang der Einnahmen und Reaktion sind nicht bekannt.']
      ]};
    if (b === 'open') return {
      mechanism:'B-Land verzichtet auf die neue Importabgabe. In unserem Modell bleiben die bisherigen Handelsbedingungen bestehen. Avanti erhält dadurch keine zusätzliche Zollbelastung.',
      actors:[
        ['Beard', 'Der Wettbewerbsdruck bleibt bestehen. Beard könnte an Produkten, Kosten oder Werbung arbeiten. Ob das Absatz und Beschäftigung sichert, wissen wir nicht.'],
        ['Avanti', 'Der Zugang zum Markt in B-Land bleibt unter den bisherigen Bedingungen möglich. Künftige Verkäufe sind trotzdem nicht garantiert.'],
        ['Verbraucherinnen in B-Land', 'Wahlmöglichkeiten und Wettbewerb bleiben erhalten. Es entsteht keine zusätzliche Zollbelastung. Familien mit Bezug zu Beard können sich weiter um Arbeitsplätze sorgen.'],
        ['Regierungen', 'B-Land muss überlegen, wie es auf Beards Probleme reagieren kann. Es gibt aus dem nicht eingeführten Zoll keine neuen Einnahmen. Beide Länder können andere Wege besprechen.']
      ]};
    return null;
  }
  function reaction(b,a) {
    if (b === 'tariff' && a === 'negotiate') return {
      mechanism:'Ein Verhandlungsangebot hebt den Zoll B-Lands noch nicht auf.',
      effect:'Gespräche könnten den Konflikt begrenzen. Sie könnten aber auch erfolglos bleiben. Avanti und die Käufer in B-Land bleiben zunächst vom Zoll betroffen.',
      question:'Was müsste bei den Verhandlungen geklärt werden, damit beide Länder einen Grund zum Einlenken haben?'
    };
    if (b === 'tariff' && a === 'counter') return {
      mechanism:'A-Land erschwert nun ebenfalls Importe von Beard. Beide Regierungen beeinflussen damit den Handel.',
      effect:'Beard könnte zu Hause Schutz erhalten und zugleich Exportchancen verlieren. Käufer in beiden Ländern könnten stärker belastet werden. Weitere Gegenmaßnahmen sind möglich, aber nicht sicher.',
      question:'Warum könnte Beard trotz des Schutzes in B-Land durch die Entscheidung A-Lands Nachteile haben?'
    };
    if (b === 'open' && a === 'talk') return {
      mechanism:'Die Regierungen sprechen über Wettbewerb. In dieser Runde führt keines der Länder einen neuen Zoll ein.',
      effect:'Gemeinsame Lösungen oder Anpassungen könnten Beard helfen, ohne den Handel zusätzlich zu behindern. Das Ergebnis der Gespräche bleibt offen. Der Wettbewerbsdruck verschwindet durch ein Gespräch noch nicht.',
      question:'Welche Schwierigkeit müsste in den Gesprächen bearbeitet werden, wenn der Handel offen bleibt?'
    };
    if (b === 'open' && a === 'continue') return {
      mechanism:'Beide Länder führen in dieser Runde keine neue Handelsbeschränkung ein.',
      effect:'Offener Handel und Konkurrenz bleiben bestehen. Käufer behalten ihre Wahlmöglichkeiten. Für Beard bleibt die Frage offen, wie das Unternehmen trotz der Konkurrenz erfolgreich sein kann.',
      question:'Warum bedeutet offener Handel trotzdem nicht, dass alle Unternehmen und Beschäftigten sicher profitieren?'
    };
    return null;
  }
  function fresh() {return {version:1,step:0,role:null,roleAnswers:{},answers:{},b:null,a:null,revealed:{},classroom:{}};}
  function sanitize(raw) {
    const s=fresh(); if(!raw || raw.version!==1) return s;
    s.role=Object.hasOwn(roles,raw.role)?raw.role:null;
    s.b=Object.hasOwn(bLabels,raw.b)?raw.b:null;
    s.a=aOptions(s.b).some(o=>o.id===raw.a)?raw.a:null;
    s.step=Number.isInteger(raw.step)?Math.max(0,Math.min(8,raw.step)):0;
    for(const key of ['roleAnswers','answers','classroom']) {
      if(raw[key] && typeof raw[key]==='object' && !Array.isArray(raw[key])) {
        if(key==='roleAnswers') {
          for(const id of Object.keys(roles)) if(raw[key][id] && typeof raw[key][id]==='object') s.roleAnswers[id]=Object.fromEntries(Object.entries(raw[key][id]).filter(([k,v])=>['interest','demand'].includes(k) && typeof v==='string').map(([k,v])=>[k,v.slice(0,20000)]));
        } else s[key]=Object.fromEntries(Object.entries(raw[key]).filter(([k,v])=>/^[a-zA-Z0-9_-]{1,90}$/.test(k)&&typeof v==='string').map(([k,v])=>[k,v.slice(0,20000)]));
      }
    }
    if(raw.revealed && typeof raw.revealed==='object') for(const b of Object.keys(bLabels)) s.revealed[b]=raw.revealed[b]===true;
    if(s.step>=3&&!s.role)s.step=2;
    if(s.step>=5&&!s.b)s.step=4;
    if(s.step>=6&&!s.revealed[s.b])s.step=5;
    if(s.step>=7&&!s.a)s.step=6;
    return s;
  }
  function setB(s,b) {if(!Object.hasOwn(bLabels,b))return false;if(s.b!==b){s.b=b;s.a=null;}return true;}
  function setA(s,a) {if(!aOptions(s.b).some(o=>o.id===a))return false;s.a=a;return true;}
  function getRoute(s) {return `${s.b||'unset'}_${s.a||'unset'}`;}
  function getExport(s) {
    const a=aOptions(s.b).find(o=>o.id===s.a);
    const own=s.roleAnswers[s.role]||{};
    const rows=[['Meine Rolle', roles[s.role]?.title||'Noch nicht gewählt'],['Das Ausgangsproblem',s.answers.conflict],['Wichtiges Interesse',own.interest],['Meine Forderung und Begründung',own.demand],['Geprüfte unterschiedliche Einschätzung',s.answers[`disagreement_${s.role}`]],['Gemeinsame Gruppenforderung und Begründung',s.answers[`group_${s.role}`]],['Entscheidung B-Land',bLabels[s.b]||'Noch nicht bekannt'],['Meine zuerst erklärte Folge',s.answers[`forecast_${s.role}_${s.b}`]],['Folge für einen anderen Akteur',s.answers[`other_${s.role}_${s.b}`]],['Reaktion A-Land',a?.title||'Noch nicht bekannt'],['Internationale Wechselwirkung',s.answers[`reaction_${s.role}_${getRoute(s)}`]],['Auswertung',s.answers[`evaluation_${s.role}_${getRoute(s)}`]],['Fachbegriffe am Fall',s.answers[`terms_${s.role}_${getRoute(s)}`]]];
    return 'HANDELSKONFLIKT – Meine Ergebnisse\nKeine automatisch synchronisierten Klassenergebnisse.\n\n'+rows.map(([label,val])=>label+'\n'+(val?.trim()||'—')+'\n').join('\n');
  }
  const api={roles,definitions,bLabels,aOptions,outcomes,reaction,fresh,sanitize,setB,setA,getRoute,getExport};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.Trade=api;
})(typeof globalThis!=='undefined'?globalThis:this);
