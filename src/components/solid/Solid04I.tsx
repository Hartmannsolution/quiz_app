// Violating the Interface Segregation Principle (ISP)

// Large interface containing multiple print-related methods (Should be split into smaller interfaces as per ISP)
interface Printer {
  printDocument(document: string): void;
  scanDocument(document: string): void;
  faxDocument(document: string): void;
}

// Class implementing the Printer interface
class MultifunctionPrinter implements Printer {
  printDocument(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scanDocument(document: string): void {
    console.log(`Scanning document: ${document}`);
  }

  faxDocument(document: string): void {
    console.log(`Faxing document: ${document}`);
  }
}

// Function that only requires printing functionality (but still depends on the entire Printer interface)
function printDocument(printer: Printer, document: string): void {
  printer.printDocument(document);
}

// Usage
const multifunctionPrinter = new MultifunctionPrinter();
printDocument(multifunctionPrinter, "Sample Document");

export default () => {
  return (
    <>
      <h1>SOLID 04: ISP</h1>
      <h3>Interface Segregation Principle</h3>
      <p>Open console to see the output</p>
    </>
  );
}

// Adhering to the Interface Segregation Principle (ISP)
interface Printer {
  printDocument(document: string): void;
}

interface Scanner {
  scanDocument(document: string): void;
}

interface Fax {
  faxDocument(document: string): void;
}

// Class implementing only the necessary interfaces
class MultifunctionDevice implements Printer, Scanner, Fax {
  printDocument(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scanDocument(document: string): void {
    console.log(`Scanning document: ${document}`);
  }

  faxDocument(document: string): void {
    console.log(`Faxing document: ${document}`);
  }
}

// Functions with specific interface dependencies
function printDocumentOnly(printer: Printer, document: string): void {
  printer.printDocument(document);
}

function scanDocumentOnly(scanner: Scanner, document: string): void {
  scanner.scanDocument(document);
}

// Usage
const multifunctionDevice = new MultifunctionDevice();
printDocumentOnly(multifunctionDevice, "Sample Document");
scanDocumentOnly(multifunctionDevice, "Sample Document");
