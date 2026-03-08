import Template1 from "@/templates/Template1";
import Template2 from "@/templates/Template2";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Preview() {
    return (
        <div className="max-w-3xl mx-auto py-6">
            <h1 className="text-2xl font-semibold mb-4">Biodata Preview</h1>

            <Tabs defaultValue="template1" className="w-full">
                <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="template1">Template 1</TabsTrigger>
                    <TabsTrigger value="template2">Template 2</TabsTrigger>
                </TabsList>

                <TabsContent value="template1">
                    <Template1 />
                </TabsContent>

                <TabsContent value="template2">
                    <Template2 />
                </TabsContent>
            </Tabs>
        </div>
    );
}