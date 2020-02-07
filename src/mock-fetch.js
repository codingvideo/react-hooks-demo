function createMockFetch(map){
  return function(url){ /* fetch mock */
    return { /* promise mock */
      then: function(){
        return { /* another promise mock */
          then: function(cb){
            let mockJson = map[url]();
            cb(mockJson);
          }
        };
      }
    }
  }
}

const fetch = createMockFetch({
  '/current-view-count': function(){
    return {
      "view-count": parseInt((new Date()).getTime().toString().slice(-8, -2))
    };
  }
});

export default fetch;