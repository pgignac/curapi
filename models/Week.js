const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const weeksSchema= new Schema(
		{
			week: Number,
			Topic: Array,
			Materials: Array,
			Outcomes: Array,
			Instruction: Array,
			"Evaluation Name": Array,
			"Evaluation Date": Array
		}
);
const Week=mongoose.model("comp122", weeksSchema);
module.exports=Week;
