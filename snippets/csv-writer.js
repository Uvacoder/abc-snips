const code = `
function CSVWriter() {
	this.csv = "";

	this.addToLine = function (msg, { start } = {}) {
		const prefix = start ? "" : ",";
		this.csv += prefix + msg;
		return this;
	};

	this.completeLine = function () {
		this.csv += "\\n";
		return this;
	};

	this.value = function () {
		return this.csv;
	};
}
`;

const snippet = {
  title: "Javascript Logic | CSV Writer",
  code,
};

export default snippet;
