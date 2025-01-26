import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LogoHeader } from "../components/LogoHeader";
import { Link } from "expo-router";

export function Login() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={
        ({ paddingTop: insets.top, paddingBottom: insets.bottom },
        header.content)
      }
    >
      <LogoHeader />

      <View style={header.content}>
        <Text style={header.textGreeting}>¡BIENVENIDO DE REGRESO!</Text>
        <Text style={header.textTitle}>Inicio de Sesión</Text>
      </View>

      <View style={form.content}>
        <Text style={form.label}>Correo electrónico</Text>
        <TextInput
          style={form.input}
          placeholder="usuario@piaassistant.com"
          placeholderTextColor={"#777"}
        />
        <Text style={form.label}>Contraseña</Text>
        <TextInput
          style={form.input}
          placeholder="Contraseña"
          placeholderTextColor={"#777"}
          secureTextEntry
        />
      </View>
      <Pressable style={form.button}>
        <Text style={form.buttonText}>Iniciar sesión</Text>
      </Pressable>

      <View style={form.link}>
        <Text style={form.linkText}>¿No tienes cuenta?</Text>
        {/* <Pressable>
          <Text style={form.loginLinkText}>¡Regístrate!</Text>
        </Pressable> */}
        <Link href="/signup" style={form.loginLinkText}>
          ¡Regístrate!
        </Link>
      </View>
    </View>
  );
}

const header = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  textGreeting: {
    fontWeight: 700,
    color: "#b1bcbf",
    fontSize: 18,
  },
  textTitle: {
    color: "#fff",
    fontSize: 35,
    fontWeight: 700,
  },
});

const form = StyleSheet.create({
  content: {
    marginBottom: 15,
  },
  label: {
    color: "#b1bcbf",
    marginBottom: 5,
  },
  input: {
    borderColor: "#b1bcbf",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    width: 300,
    marginBottom: 10,
    color: "#fff",
  },
  button: {
    backgroundColor: "#435257",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    width: 300,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
  },
  link: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
  },
  linkText: {
    color: "#b1bcbf",
  },
  loginLinkText: {
    color: "#809ba4",
  },
});
