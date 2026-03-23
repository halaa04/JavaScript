let events = [
  { event: "click", time: 1 },
  { event: "click", time: 2 },
  { event: "scroll", time: 3 },
  { event: "scroll", time: 4 },
  { event: "click", time: 5 },
  { event: "scroll", time: 6 },
];
let count = 1;
for (let i = 0; i < events.length -1; i++){
    
    
    if ( events[i].time < events[i + 1].time &&
        events[i].event == events[i + 1].event )
    
    {
        count++;
        document.writeln(events[i].event + ",");
        document.writeln("count : " + count);
        
    } 
    else {
        document.writeln(events[i].event + ",");
        document.writeln("count : " + count);
    }
}
