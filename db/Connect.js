const mongoose = require('mongoose')
  class Connect {
    static connectDb(url){
        try {
            mongoose.connect(url)
            return true 
        } catch (error) {
            return false
        }
    }
  }

  module.exports = Connect