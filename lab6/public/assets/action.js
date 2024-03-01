$(document).ready(function () {
  const form = $("#form");
  form.on("submit", function () {
    if (form[0].checkValidity()) {
      $.ajax({
        type: "POST",
        url: "/chessSurvey",
        data: $(this).serializeArray(),
        success: function () {
          $("#submitBtn").prop("disabled", "true");

          $("#confirmation").removeAttr("hidden");
          $("#confirmation").text(
            "Thank you for participating in this user interface survey!"
          );
        },
      });
    }

    form[0].classList.add("was-validated");
    return false;
  });
});
