import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Terminal } from '@xterm/xterm';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  constructor() { }

  @ViewChild('terminal')
  terminal: ElementRef<HTMLDivElement> | undefined;

  @Input()
  commandEntered: (value: string) => string | undefined = () => undefined;

  ngAfterViewInit() {
    const term = new Terminal();
    if (!this.terminal) throw 'Terminal not exist';
    term.open(this.terminal.nativeElement);
    term.write('$ ');




let command = '';

function prompt(term: Terminal) {
    command = '';
    term.write('\r\n$ ');
}

term.onData(e => {
    switch (e) {
        case '\u0003': // Ctrl+C
            term.write('^C');
            prompt(term);
            break;
        case '\r': // Enter
            try {
              const answer = this.commandEntered(command);
              if (answer !== undefined) term.writeln(`\r\n${answer}`);
              command = '';
            } catch (e: any) {
                term.writeln('\r\nError\r\n' + e?.message);
            }
            prompt(term);
            break;
        case '\u007F': // Backspace (DEL)
            // Do not delete the prompt
            if ((term as any)._core.buffer.x > 2) {
                term.write('\b \b');
                if (command.length > 0) {
                    command = command.substr(0, command.length - 1);
                }
            }
            break;
        default: // Print all other characters for demo
            if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
                command += e;
                term.write(e);
            }
    }
});


  }

  ngOnInit(): void {
  }

}
