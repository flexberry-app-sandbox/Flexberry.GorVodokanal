﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.GorVodokanal
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Dictionary.
    /// </summary>
    // *** Start programmer edit section *** (Dictionary CustomAttributes)

    // *** End programmer edit section *** (Dictionary CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("DictionaryE", new string[] {
            "Active as \'Active\'"})]
    [View("DictionaryL", new string[] {
            "Active as \'Active\'"})]
    public class Dictionary : ICSSoft.STORMNET.DataObject
    {
        
        private bool fActive;
        
        // *** Start programmer edit section *** (Dictionary CustomMembers)

        // *** End programmer edit section *** (Dictionary CustomMembers)

        
        /// <summary>
        /// Active.
        /// </summary>
        // *** Start programmer edit section *** (Dictionary.Active CustomAttributes)

        // *** End programmer edit section *** (Dictionary.Active CustomAttributes)
        public virtual bool Active
        {
            get
            {
                // *** Start programmer edit section *** (Dictionary.Active Get start)

                // *** End programmer edit section *** (Dictionary.Active Get start)
                bool result = this.fActive;
                // *** Start programmer edit section *** (Dictionary.Active Get end)

                // *** End programmer edit section *** (Dictionary.Active Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Dictionary.Active Set start)

                // *** End programmer edit section *** (Dictionary.Active Set start)
                this.fActive = value;
                // *** Start programmer edit section *** (Dictionary.Active Set end)

                // *** End programmer edit section *** (Dictionary.Active Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "DictionaryE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View DictionaryE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("DictionaryE", typeof(IIS.GorVodokanal.Dictionary));
                }
            }
            
            /// <summary>
            /// "DictionaryL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View DictionaryL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("DictionaryL", typeof(IIS.GorVodokanal.Dictionary));
                }
            }
        }
    }
}
