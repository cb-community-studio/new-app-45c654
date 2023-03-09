// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'article';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       articleID: { type: Number, required: true, unique: true },
       thumbnail: { type: String, required: true },
       articleTitle: { type: String, required: true },
       articleContent: { type: String, required: true },
       author: { type: String, required: false },
       datePublished: { type: Date, required: true },
       authorInfo: { type: Schema.Types.ObjectId },

    }
          // ~cb-read-end~
          , 
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };