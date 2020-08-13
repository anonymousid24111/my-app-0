import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [50, 'Name cannot be more than 60 characters'],
  },
  email: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [50, "Owner's Name cannot be more than 60 characters"],
  },
  phone: {
    /* The species of your pet */

    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  age: {
    /* Pet's age, if applicable */

    type: Number,
  },
  gender: {
    /* Boolean poddy_trained value, if applicable */

    type: String,
  },
  password: {
    /* List of dietary needs, if applicale */

    type: String,
  },
  avatar: {
    /* Url to pet image */

    // required: [true, 'Please provide an image url for this pet.'],
    type: String,
  },
  
})

export default mongoose.models.User || mongoose.model('User', UserSchema)