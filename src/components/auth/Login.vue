<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/lock.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt einloggen</h2>
      <p>
        oder
        <a
          class="text-vue2"
          role="button"
          @click="changeComponent('RegisterComponent')"
          >Konto erstellen</a
        >
      </p>
    </div>

    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplayText }}
    </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>Email Adresse</strong></label>
          <Field
            as="input"
            name="email"
            type="email"
            class="form-control"
            id="email"
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field
            as="input"
            name="password"
            type="password"
            class="form-control"
            id="password"
          />
          <small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading"> Einloggen</span>
              <span v-else class="spinner-border spinner-border-sm"></span>
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field } from "vee-validate";
export default {
  name: "LoginComponent",
  components: {
    Form,
    Field,
  },
  emits: {
    "change-component": (payload) => {
      if (payload.componentName !== "RegisterComponent") {
        return false;
      }

      return true;
    },
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("E-Mail Adresse wird benötigt")
        .trim()
        .email("Das ist keine gültige Email Adresse"),
      password: yup
        .string()
        .required("Ein Passwort wird benötigt")
        .min(6, "Das Passwort muss mindestens 6 Zeichen lang sein"),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("INVALID_PASSWORD")) {
          return "Passwort ist Falsch";
        } else if (this.error.includes("EMAIL_NOT_FOUND")) {
          return "Email nicht gefunden";
        } else {
          return "Es ist ein unbekannter Fehler aufgetretet.";
        }
      }

      return "EIn anderer Fehler";
    },
  },
  methods: {
    submitData(values) {
      this.isLoading = true;
      this.error = "";
      //  console.log(values);
      this.$store
        .dispatch("Signin", {
          email: values.email,
          password: values.password,
        })
        .then(() => {
          this.isLoading = false;
          console.log("Login erfolgreich");
          // Weiterleitung zum interenen Bereich
          this.$router.push({ path: "/shop" });
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
  },
};
</script>

<style scoped>
</style>