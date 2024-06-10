function toggleForm() {
    var selection = document.getElementById("selection").value;

    if (selection === "batting") {
        document.getElementById("battingForm").classList.remove("hidden");
        document.getElementById("pitchingForm").classList.add("hidden");
    } else if (selection === "pitching") {
        document.getElementById("pitchingForm").classList.remove("hidden");
        document.getElementById("battingForm").classList.add("hidden");
    } else {
        document.getElementById("battingForm").classList.add("hidden");
        document.getElementById("pitchingForm").classList.add("hidden");
    }
}