const color= "\x1b[1;35m";
const underline= "\x1b[94;4m";
const normal= "\x1b[0m";
export const introMessage = [
	"   Welcome to VMIFY. If unsure, try these examples:",
	"",
	"     python3 examples/python3/fibonacci.py ",
	"     gcc -o helloworld examples/c/helloworld.c && ./helloworld",
	"     objdump -d ./helloworld | less -M",
	"     vim examples/c/helloworld.c",
	"     REMEMBER THIS IS A PROJECT MADE BY GALAXYFOUNDED FOR TESTS ONLY PLEASE DO NOT USE AS A MAIN-BASE HOSTING UNLESS YOU ARE AUTHORIZED",
	""
];
export const errorMessage = [
	color + "VM could not start" + normal,
	"",
	"VM is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
	"",
	"Give it a try from a desktop version / another browser!",
	"",
	"VM internal error message is:",
	""
];
export const unexpectedErrorMessage = [
	color + "VMIFY encountered an unexpected error" + normal,
	"",
	"Check the DevTools console for further information",
	"",
	"Please consider reporting a bug!",
	"",
	"VM internal error message is:",
	""
];
