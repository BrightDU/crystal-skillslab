import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faq() {
    return (
        <>
            <h3>Frequently Asked Questions</h3>
            <Accordion
            allowZeroExpanded={true}
            >
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Is Teachcomp free?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yes. Teachcomp provides a free version that is free to use forever.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Do I need an internet connection to use the Teachcomp App?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        No. Once you download and install the Teachcomp App, you can continue enjoying your learning offline without worrying about an internet connection.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Who can use Teachcomp?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Beginners with little or no programming background can use Teachcomp to get started. While intermediate learners can enhance their programming skills using the advanced projects in Teachcomp.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Do I need to install any Code Editor or browser to use Teachcomp?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                           No. Teachcomp provides a workspace that contains a Code Editor and a Preview Screen.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How do I update the Teachcomp app?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            To update Teachcomp for Windows, download the latest version from this page and install it. Remember to uninstall the old version before installing the new version.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}