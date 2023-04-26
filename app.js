let defaultThreads = [
     {
         id: 1,
         title: "Thread 1",
         author: "Fabrice",
         date: Date.now(),
         content: "Thread content",
         comments: [
             {
                 author: "Fabrice",
                 date: Date.now(),
                 content: "Hey there"
             },
             {
                 author: "Elissa",
                 date: Date.now(),
                 content: "Hey to you too"
             }
         ]
     },
     {
         id: 2,
         title: "Thread 2",
         author: "Ish",
         date: Date.now(),
         content: "Thread content 2",
         comments: [
             {
                 author: "Ish",
                 date: Date.now(),
                 content: "Hey there"
             },
             {
                 author: "Elissa",
                 date: Date.now(),
                 content: "Hey to you too"
             }
         ]
     }
 ]
 
 let threads = defaultThreads
 if (localStorage && localStorage.getItem('threads')) {
     threads = JSON.parse(localStorage.getItem('threads'));
 } else {
     threads = defaultThreads;
     localStorage.setItem('threads', JSON.stringify(defaultThreads));
 }
